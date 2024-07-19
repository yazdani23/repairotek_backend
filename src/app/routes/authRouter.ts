import express from "express";
import AuthController from "../controllers/AuthController";
import { WordModule } from "@faker-js/faker";
const authRouter = express.Router();


authRouter.post("/login", AuthController.login);
// authRouter.post("/auth/signup", AuthController.signup);
// authRouter.post("/auth/forgotPassword", AuthController.forgotPassword);
// authRouter.post("/auth/changePassword", AuthController.changePassword);

export default authRouter;
