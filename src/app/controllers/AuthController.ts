// auth.controller.ts
import { Request, Response } from "express";
import AuthService from "../../domain/services/AuthService";

class AuthController {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async login(req: Request, res: Response): Promise<void> {
    const token = await this.authService.login(
      req.body.email,
      req.body.password
    );
    if (!token) {
      throw Error("Email or Password not Corret");
    }
    res.status(200).json({ token });
  }
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

export default AuthController;





