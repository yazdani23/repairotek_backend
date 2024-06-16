// auth.controller.ts
import { Request, Response } from "express";
import AuthService, { AuthServiceType } from "../../domain/services/AuthService";
import TokenBlackListService from "../../domain/services/TokenBlackListService";
import createError from "http-errors";
import BaseService from "../../domain/services/BaseService";
import { UserDoc } from "../../domain/docs/User";
import { extractToken, verifyToken } from "../middlewares/authMiddleware";
import { setToken } from "../../utils/functions/setToken";

class AuthController {
  constructor(private authService: AuthServiceType) {}

  async login(req: Request, res: Response): Promise<Response> {
    const { accessToken, refreshToken } = await this.authService.login(
      req.body.email,
      req.body.password
    );
    if (!accessToken || !refreshToken) {
      return res.status(400).json({ error: "Invalid email or password" });
    }
    const user = await this.authService.getByEmail(req.body.email); // Assuming this method fetches user details
    return res.status(200).json({ accessToken, refreshToken, user });
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

  ///////////////// changepass
  // const changePassword = async (req, res) => {
  //   try {
  //     const { email, oldPassword, newPassword } = req.body;

  //     const user = await User
  //       .findOne({ email });

  //     if (user) {
  //       const verifyPass = await bcrypt.compare(oldPassword, user.password);
  //       if (verifyPass) {
  //         const hashPassword = await bcrypt.hash(newPassword, saltRoundd);
  //         user.password = hashPassword;
  //         await user.save();
  //         return res.status(200).send({ message: "Password changed" });
  //       }
  //       return res.status(400).send({ message: "old password is not correct!!!" });
  //     } else {
  //       return res.status(400).send({ message: "email is not correct!!!" });
  //     }
  //   }
  //   catch (error) {
  //     return res.status(500).send({ message: "Internal Sever Error" });
  //   }
  // }

  //forgot password
  // const forgotPassword = async (req, res) => {
  //   try {

  //     const { email } = req.body;
  //     const user  = await User
  //       .findOne({ email });
  //     if (user) {
  //       const token = jwt.sign(
  //         { userId: user._id, role: user.role },
  //         process.env.SECRET_KEY,
  //         { expiresIn: "15m" }
  //       );
  //       return res.status(200).send({ message: "token sent to your email", token });
  //     }
  //     return res.status(400).send({ message: "email is not correct!!!" });
  //   }
  //   catch (error) {
  //     return res.status(500).send({ message: "Internal Sever Error" });
  //   }
  // }

  // async logout(req: Request, res: Response): Promise<void> {
  //    try {
  //      const token = req.headers.authorization?.split(" ")[1];
  //      if (!token) {
  //        throw new Error("No token provided");
  //      }

  //      await this.authService.logout(token);
  //      res.status(200).json({ message: "Logout successful" });
  //    } catch (error) {
  //      next(error);
  //    }
  // }
  // async register(req: Request, res: Response): Promise<void> {

  // }
}

export default new AuthController(AuthService);





