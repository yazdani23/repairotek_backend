// src/app/controllers/AuthController.ts
import { Request, Response, NextFunction } from "express";
import AuthService, {
  AuthServiceType,
} from "../../domain/services/AuthService";
import TokenBlackListService from "../../domain/services/TokenBlackListService";
import createError from "http-errors";
import { UserDoc } from "../../domain/docs/User";
import { extractToken, verifyToken } from "../middlewares/authMiddleware";
import { setToken } from "../../utils/functions/setToken";
import { TokenBlackListDoc } from "../../domain/docs/TokenBlackList";

class AuthController {
  constructor(private authService: AuthServiceType) {}

  async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { email, password } = req.body;
      const { accessToken, refreshToken, userInfo } =
        await this.authService.login(email, password);
      return res.status(200).json({ accessToken, refreshToken, userInfo });
    } catch (err) {
      next(err);
    }
  }

  async signup(
    req: Request,
    res: Response,
    next: NextFunction
  ):Promise<Response | void> {
    try {
      const { firstName, email, password } = req.body;
      const user = await this.authService.signup({
        firstName,
        email,
        password,
      });
      return res.status(201).json({ message: "Signup successful", user });
    } catch (err) {
      next(err);
    }
  }

  async forgotPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ):Promise<Response | void> {
    try {
      const { email } = req.body;
      await this.authService.sendPasswordResetEmail(email);
      return res.status(200).json({ message: "Password reset email sent" });
    } catch (err) {
      next(err);
    }
  }

  async refreshToken(
    req: Request,
    res: Response,
    next: NextFunction
  ):Promise<Response | void> {
    try {
      const { refreshToken } = req.body;
      const decoded = await verifyToken(refreshToken);
      const user = await this.authService.getById(decoded.id);
      if (!user) {
        throw createError(404, "User not found");
      }
      const newAccessToken = setToken(user, "15m");
      return res.status(200).json({ accessToken: newAccessToken });
    } catch (err) {
      next(err);
    }
  }

  async logout(
    req: Request,
    res: Response,
    next: NextFunction
  ):Promise<Response | void> {
    try {
      const token = extractToken(req);
      const data = { token } as TokenBlackListDoc;
      await TokenBlackListService.create(data);
      return res.status(200).json({ message: "Logged out successfully" });
    } catch (err) {
      next(err);
    }
  }
}

export default new AuthController(AuthService);
