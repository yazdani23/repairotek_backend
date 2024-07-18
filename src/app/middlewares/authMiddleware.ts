import createError from 'http-errors';
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserDoc } from "../../domain/docs/User";
import logger from "../../utils/helpers/logger";
import TokenBlackListService from "../../domain/services/TokenBlackListService";
import { RoleDoc } from "../../domain/docs/Role";

interface AuthRequest extends Request {
  user?: UserDoc;
}

class AuthMiddleware {

 verifyToken = async (token: string): Promise<UserDoc> => {
   const isTokenBlacklisted = await TokenBlackListService.isBlackToken(token);
   if (isTokenBlacklisted) {
     throw createError(401, "Token is blacklisted");
   }
   try {
     const SECRET_KEY = process.env.SECRET_KEY || "secret key";
     const decoded: UserDoc = jwt.verify(token, SECRET_KEY) as UserDoc;
     return decoded;
   } catch (err: any) {
     if (err instanceof jwt.JsonWebTokenError) {
       throw createError(401, err.message);
     }
     throw createError(500, "An error occurred while verifying the token.");
   }
};

 extractToken = (req: Request): string => { 
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    throw createError(401, "Authorization header missing");
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    throw createError(401, "Token missing");
  }
  return token;
};


isLogged = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = this.extractToken(req);
    const decoded = await this.verifyToken(token);
    req.user = decoded;
    next();
  } catch (err: any) {
    return res.status(401).json({ error: err.message });
  }
};

isAdmin = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {

  try {
     const token = this.extractToken(req);
     const decoded = await this.verifyToken(token);
    if ((decoded.roleId as RoleDoc).name !== "Admin") {
      return res.status(403).json({ message: "You are not authorized" });
    }
    req.user = decoded;
    next();
  } catch (err: any) {
    return res.status(401).json({ error: err.message });
  }
};
}

// export { isLogged, isAdmin, verifyToken, extractToken};
export default new AuthMiddleware()
