import { Request, Response } from "express";
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
  // private authService = this.service as typeof AuthService;
  constructor(private authService: AuthServiceType) {}

  async login(req: Request, res: Response): Promise<Response> {
    const { accessToken, refreshToken, userInfo } =
      await this.authService.login(req.body.email, req.body.password);
      
    if (!accessToken || !refreshToken) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    return res.status(200).json({ accessToken, refreshToken, userInfo });
  }

  async signup(req: Request, res: Response): Promise<Response> {
    const { firstName, email, password } = req.body;
    if (!firstName || !email || !password) {
      throw createError(400, "Name, email, and password are required");
    }
    const user = await this.authService.signup({ firstName, email, password });

    return res.status(201).json({ message: "Signup successful", user });
  }

  async forgotPassword(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    if (!email) {
      throw createError(400, "Email is required");
    }
    await this.authService.sendPasswordResetEmail(email);
    return res.status(200).json({ message: "Password reset email sent" });
  }

  async refreshToken(req: Request, res: Response): Promise<Response> {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      throw createError(400, "Refresh token is required");
    }
    const decoded = await verifyToken(refreshToken);
    const user = await this.authService.getById(decoded.id);
    if (!user) {
      throw createError(404, "User not found");
    }
    const newAccessToken = setToken(user, "15m");
    return res.status(200).json({ accessToken: newAccessToken });
  }

  async logout(req: Request, res: Response): Promise<Response> {
    const token = extractToken(req);
    const data = { token } as TokenBlackListDoc;
    await TokenBlackListService.create(data);
    return res.status(200).json({ message: "Logged out successfully" });
  }
}

export default new AuthController(AuthService);
