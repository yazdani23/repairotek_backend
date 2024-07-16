import { Request, Response, NextFunction } from "express";
import UserRepository from "../../domain/repositories/UserRepository";

const updateLastActivityMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
//   if (req.user && req.user.id) {
//     const currentTime = Date.now();
//     await UserRepository.updateOne(
//       { _id: req.user.id },
//       { lastActivity: currentTime }
//     );
//   }
  next();
};

export default updateLastActivityMiddleware;
