// src/app/controllers/AuthController.ts
import { Request, Response, NextFunction } from "express";
import AuthService, {
  AuthServiceType,
} from "../../domain/services/AuthService";
import TokenBlackListService from "../../domain/services/TokenBlackListService";
import createError from "http-errors";
import { UserDoc } from "../../domain/docs/User";
import { setToken } from "../../utils/functions/setToken";
import { TokenBlackListDoc } from "../../domain/docs/TokenBlackList";
import AuthMiddleware from "../middlewares/authMiddleware";

class AuthController {
  constructor(private authService: AuthServiceType) {}

  /**
   * @summary Logs in a user
   * @description Authenticates a user and returns access and refresh tokens along with user information.
   * @param {Request} req - Express request object
   * @param {Response} res - Express response object
   * @param {NextFunction} next - Express next middleware function
   * @returns {Promise<Response | void>} - Response containing accessToken, refreshToken, userInfo, expiresIn, and refreshTokenExpiresIn
   */
  async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { email, password } = req.body;
      const {
        accessToken,
        refreshToken,
        userInfo,
        expiresIn,
        refreshTokenExpiresIn,
      } = await this.authService.login(email, password);
      return res.status(200).json({
        accessToken,
        refreshToken,
        expiresIn,
        refreshTokenExpiresIn,
        userInfo,
      });
    } catch (err) {
      next(err);
    }
  }

  async signup(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
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
  ): Promise<Response | void> {
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
  ): Promise<Response | void> {
    try {
      if (!req.user) {
        throw createError(401, "User not authenticated");
      }
      const { id } = req.user;
      const user = await this.authService.getById(id);
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
  ): Promise<Response | void> {
    try {
      const token = AuthMiddleware.extractToken(req);
      const data = { token } as TokenBlackListDoc;
      await TokenBlackListService.create(data);
      return res.status(200).json({ message: "Logged out successfully" });
    } catch (err) {
      next(err);
    }
  }
}

export default new AuthController(AuthService);
