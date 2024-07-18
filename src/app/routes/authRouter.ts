import express from "express";
import AuthController from "../controllers/AuthController";
import AuthMiddleware from "../middlewares/authMiddleware";

const authRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Endpoint for managing authentication
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Logs in a user
 *     tags: [Auth]
 *     operationId: loginUser
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
 *             email: shervin.sheikh@gmail.com
 *             password: Admin@1234
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
 *                 userInfo:
 *                   $ref: '#/components/schemas/UserInfo'
 *                   description: The logged-in user's details
 *                 expiresIn:
 *                   type: number
 *                   description: Access token expiration time in seconds
 *                 refreshTokenExpiresIn:
 *                   type: number
 *                   description: Refresh token expiration time in seconds
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

authRouter.post("/auth/login", (req, res, next) =>
  AuthController.login(req, res, next)
);

/**
 * @swagger
 * /auth/refreshToken:
 *   post:
 *     summary: Refreshes the access token
 *     tags: [Auth]
 *     operationId: refreshToken
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

authRouter.post(
  "/auth/refreshToken",
  AuthMiddleware.isLogged,
  (req, res, next) => AuthController.refreshToken(req, res, next)
);


/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Log out the user
 *     tags: [Auth]
 *     operationId: logout
 *     description: Log out the user by blacklisting the provided access token.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Logged out successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message
 *                   example: Logged out successfully
 *       401:
 *         description: Unauthorized, token is missing or invalid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: Unauthorized
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *                   example: An error occurred while logging out
 */

authRouter.post(
  "/auth/logout",
  AuthMiddleware.isLogged,
  (req, res, next) => AuthController.refreshToken(req, res, next)
);


/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Signs up a new user
 *     tags: [Auth]
 *     operationId: signupUser
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - name
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The user's password
 *               name:
 *                 type: string
 *                 description: The user's name
 *           example:
 *             email: johndoe@example.com
 *             password: securepassword123
 *             name: John Doe
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserInfo'
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *           example:
 *             error: Invalid input
 */
authRouter.post("/auth/signup", (req, res, next) =>
  AuthController.signup(req, res, next)
);

// /**
//  * @swagger
//  * /auth/forgotPassword:
//  *   post:
//  *     summary: Sends a password reset email
//  *     tags: [Auth]
//  *     operationId: forgotPassword
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - email
//  *             properties:
//  *               email:
//  *                 type: string
//  *                 format: email
//  *                 description: The user's email address
//  *           example:
//  *             email: johndoe@example.com
//  *     responses:
//  *       200:
//  *         description: Password reset email sent
//  *       400:
//  *         description: Invalid email address
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 error:
//  *                   type: string
//  *                   description: Error message
//  *           example:
//  *             error: Invalid email address
//  */

// /**
//  * @swagger
//  * /auth/changePassword:
//  *   post:
//  *     summary: Changes the user's password
//  *     tags: [Auth]
//  *     operationId: changePassword
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             type: object
//  *             required:
//  *               - oldPassword
//  *               - newPassword
//  *             properties:
//  *               oldPassword:
//  *                 type: string
//  *                 format: password
//  *                 description: The user's old password
//  *               newPassword:
//  *                 type: string
//  *                 format: password
//  *                 description: The user's new password
//  *           example:
//  *             oldPassword: oldpassword123
//  *             newPassword: newpassword123
//  *     responses:
//  *       200:
//  *         description: Password changed successfully
//  *       400:
//  *         description: Invalid input
//  *         content:
//  *           application/json:
//  *             schema:
//  *               type: object
//  *               properties:
//  *                 error:
//  *                   type: string
//  *                   description: Error message
//  *           example:
//  *             error: Invalid input
//  */

export default authRouter;
