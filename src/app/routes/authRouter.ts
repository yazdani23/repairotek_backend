import express from "express";
import AuthController from "../controllers/AuthController";
<<<<<<< HEAD
import { WordModule } from "@faker-js/faker";
const authRouter = express.Router();


authRouter.post("/login", AuthController.login);
=======
const authRouter = express.Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Logs in a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The user's password
 *           example:
 *             email: johndoe@example.com
 *             password: securepassword123
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: JWT access token
 *                 refreshToken:
 *                   type: string
 *                   description: JWT refresh token
 *                 user:
 *                   $ref: '#/components/schemas/UserInfo'
 *                   description: The logged-in user's details
 *       400:
 *         description: Invalid email or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *           example:
 *             error: Invalid email or password
 */

/**
 * @swagger
 * /auth/refreshToken:
 *   post:
 *     summary: Refreshes the access token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 description: JWT refresh token
 *           example:
 *             refreshToken: your-refresh-token
 *     responses:
 *       200:
 *         description: New access token generated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: JWT access token
 *       400:
 *         description: Refresh token is required
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *           example:
 *             error: Refresh token is required
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *           example:
 *             error: User not found
 */
authRouter.post("/auth/login", AuthController.login);
authRouter.post("/auth/refreshToken", AuthController.refreshToken);
>>>>>>> c2f1b0748f75a3d0c33db94631c26ce9c725c4f1
// authRouter.post("/auth/signup", AuthController.signup);
// authRouter.post("/auth/forgotPassword", AuthController.forgotPassword);
// authRouter.post("/auth/changePassword", AuthController.changePassword);

export default authRouter;
