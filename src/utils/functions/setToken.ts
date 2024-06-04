import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { UserDoc } from "../../domain/docs/User";

// تنظیم توکن JWT
const setToken = (user: UserDoc): string => {
  const payload = {
    id: user._id,
    email: user.email,
    roleId: user.roleId, // فرض کنید roleId نقش کاربر را نشان می‌دهد
  };

  const token = jwt.sign(payload, process.env.SECRET as string, {
    expiresIn: "48h",
  });

  return token;
};

// میان‌افزار برای بررسی توکن
const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET as string);
    (req as any).user = decoded; // نوع user را به صورت any تعیین می‌کنیم تا تایپ‌اسکریپت خطا ندهد
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "Invalid token" });
    }
    next(error);
  }
};

export { setToken, verifyToken };
