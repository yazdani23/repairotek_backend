import express from "express";
import TokenBlackListController from "../controllers/TokenBlackListController";

const TokenBlacklistRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: TokenBlacklist
 *   description: Endpoint for managing TokenBlacklists
 */

/**
 * @swagger
 * /tokenblacklists:
 *   get:
 *     tags: [TokenBlacklist]
 *     summary: Get all token blacklists
 *     description: Retrieve a list of all token blacklists
 *     operationId: getAllTokenBlacklists
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TokenBlacklist'
 */

TokenBlacklistRouter.get("/tokenblacklists", TokenBlackListController.getAll);

/**
 * @swagger
 * /tokenblacklists:
 *   post:
 *     tags: [TokenBlacklist]
 *     summary: Create a new token blacklist
 *     description: Create a new token blacklist with the provided data
 *     operationId: createTokenBlacklist
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TokenBlacklist'
 *     responses:
 *       201:
 *         description: TokenBlacklist created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TokenBlacklist'
 */

TokenBlacklistRouter.post("/tokenblacklists", TokenBlackListController.create);

/**
 * @swagger
 * /tokenblacklists/{id}:
 *   put:
 *     tags: [TokenBlacklist]
 *     summary: Update a token blacklist
 *     description: Update a token blacklist by its ID
 *     operationId: updateTokenBlacklist
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TokenBlacklist'
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TokenBlacklist'
 *       404:
 *         description: TokenBlacklist not found
 */

TokenBlacklistRouter.put(
  "/tokenblacklists/:id",
  TokenBlackListController.update
);

/**
 * @swagger
 * /tokenblacklists/{id}:
 *   delete:
 *     tags: [TokenBlacklist]
 *     summary: Delete a token blacklist
 *     description: Delete a token blacklist by its ID
 *     operationId: deleteTokenBlacklist
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No content on successful deletion
 *       404:
 *         description: TokenBlacklist not found
 */

TokenBlacklistRouter.delete(
  "/tokenblacklists/:id",
  TokenBlackListController.delete
);

export default TokenBlacklistRouter;


