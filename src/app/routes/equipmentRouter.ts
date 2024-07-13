import express from "express";
import EquipmentController from "../controllers/EquipmentController";

/**
 * @swagger
 * components:
 *   schemas:
 *     Equipment:
 *       type: object
 *       required:
 *         - name
 *         - type
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           description: Unique identifier for the equipment
 *         name:
 *           type: string
 *           description: Name of the equipment
 *         type:
 *           type: string
 *           description: Type of the equipment
 *         description:
 *           type: string
 *           description: Description of the equipment
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The time when the equipment was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The time when the equipment was last updated
 */

const equipmentRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Equipment
 *   description: API for managing equipment
 */

/**
 * @swagger
 * /equipment:
 *   get:
 *     summary: Get all equipment
 *     tags: [Equipment]
 *     responses:
 *       200:
 *         description: List of all equipment
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Equipment'
 *       500:
 *         description: An unknown error occurred
 */
equipmentRouter.get("/equipment", EquipmentController.getAll);

/**
 * @swagger
 * /equipment/{id}:
 *   get:
 *     summary: Get equipment by ID
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier for the equipment
 *     responses:
 *       200:
 *         description: Equipment data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Equipment'
 *       404:
 *         description: Equipment not found
 *       500:
 *         description: An unknown error occurred
 */
equipmentRouter.get("/equipment/:id", EquipmentController.getById);

/**
 * @swagger
 * /equipment:
 *   post:
 *     summary: Create a new equipment
 *     tags: [Equipment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Equipment'
 *     responses:
 *       201:
 *         description: The created equipment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Equipment'
 *       500:
 *         description: An unknown error occurred
 */
equipmentRouter.post("/equipment", EquipmentController.create);

/**
 * @swagger
 * /equipment/{id}:
 *   put:
 *     summary: Update equipment by ID
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier for the equipment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Equipment'
 *     responses:
 *       200:
 *         description: The updated equipment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Equipment'
 *       404:
 *         description: Equipment not found
 *       500:
 *         description: An unknown error occurred
 */
equipmentRouter.put("/equipment/:id", EquipmentController.update);

/**
 * @swagger
 * /equipment/{id}:
 *   delete:
 *     summary: Delete equipment by ID
 *     tags: [Equipment]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: Unique identifier for the equipment
 *     responses:
 *       204:
 *         description: No content, equipment successfully deleted
 *       404:
 *         description: Equipment not found
 *       500:
 *         description: An unknown error occurred
 */
equipmentRouter.delete("/equipment/:id", EquipmentController.delete);

export default equipmentRouter;
