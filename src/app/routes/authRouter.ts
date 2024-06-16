import express from "express";
import AuthController from "../controllers/AuthController";
const authRouter = express.Router();

authRouter.post("/auth/login", AuthController.login);
authRouter.post("/auth/refreshToken", AuthController.refreshToken);
// authRouter.post("/auth/signup", AuthController.signup);
// authRouter.post("/auth/forgotPassword", AuthController.forgotPassword);
// authRouter.post("/auth/changePassword", AuthController.changePassword);

export default authRouter;
