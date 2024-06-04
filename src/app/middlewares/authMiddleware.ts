import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserDoc } from "../../domain/docs/User";
import logger from "../../utils/helpers/logger"; 
// import BlacklistService from "../services/BlacklistService"; // Uncomment this line to use BlacklistService

interface AuthRequest extends Request {
  user?: UserDoc;
}

const authMiddleware = async (err: any,req: AuthRequest,res: Response,next: NextFunction) => {
 
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

export default authMiddleware;
