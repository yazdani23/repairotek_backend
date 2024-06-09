import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserDoc } from "../../domain/docs/User";
import logger from "../../utils/helpers/logger"; 
// import BlacklistService from "../services/BlacklistService"; // Uncomment this line to use BlacklistService

interface AuthRequest extends Request {
  user?: UserDoc;
}

const isLogin = async (err: any,req: AuthRequest,res: Response,next: NextFunction) => {
 
     logger.error(err);
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];
//Todo
    // Check if the token is blacklisted
    // const isBlacklisted = await BlacklistService.isBlacklisted(token);
    // if (isBlacklisted) {
    //   return res.status(401).json({ message: "Token is blacklisted" });
    // }

    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET as string);
 (req as any).user = decoded;
    next();
   if (err)  {
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Invalid token" });
    }
    next(err);
  }
};

const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = (req as any).user?.id; // Assuming you have a way to get the user ID from the request
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await(req as any).user.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.role="Admin") {
      return next();
    }
      return res.status(403).json({ message: "Forbidden" });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default { isLogin, isAdmin };
