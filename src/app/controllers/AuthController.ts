// auth.controller.ts
import { Request, Response } from "express";
import AuthService from "../../domain/services/AuthService";
import BaseController from "./BaseController";
import { UserDoc } from "../../domain/docs/User";


class AuthController extends BaseController<UserDoc> {
  private authService = this.service as typeof AuthService;
  constructor() {
    super(AuthService);
  }


  login = async (req: Request, res: Response): Promise<Response> => {
   
      const { email, password } = req.body;
      const token = await this.authService.login(email, password);

      if (!token) {
        return res
          .status(401)
          .json({ message: "Email or Password is incorrect" });
      }

      return res.status(200).json({ message: "Login succsessful", token });
      // return token;
      // return res.status(200).json({ message: "Login succsessful" + user });
 
      // console.error(error);
      // return res.status(500).json({ message: "Internal Server Error" });

      // logger.info(token);
      // return res.json(token);
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

export default new AuthController();





