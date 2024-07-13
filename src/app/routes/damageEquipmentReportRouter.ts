import express from "express";
import DamageEquipmentReportController from "../controllers/DamageEquipmentReportController";

/**
 * @swagger
 * tags:
 *   name: DamageEquipmentReports
 *   description: Damage Equipment Report management
 */

/**
 * @swagger
 * /damageEquipmentReports:
 *   get:
 *     summary: Get all damage equipment reports
 *     tags: [DamageEquipmentReports]
 *     responses:
 *       200:
 *         description: List of all damage equipment reports
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DamageEquipmentReport'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /damageEquipmentReports/{id}:
 *   get:
 *     summary: Get damage equipment report by ID
 *     tags: [DamageEquipmentReports]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Damage equipment report ID
 *     responses:
 *       200:
 *         description: Damage equipment report data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DamageEquipmentReport'
 *       404:
 *         description: Damage equipment report not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /damageEquipmentReports:
 *   post:
 *     summary: Create a new damage equipment report
 *     tags: [DamageEquipmentReports]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DamageEquipmentReport'
 *     responses:
 *       201:
 *         description: Damage equipment report created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DamageEquipmentReport'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /damageEquipmentReports/{id}:
 *   put:
 *     summary: Update a damage equipment report by ID
 *     tags: [DamageEquipmentReports]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Damage equipment report ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DamageEquipmentReport'
 *     responses:
 *       200:
 *         description: Damage equipment report updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DamageEquipmentReport'
 *       404:
 *         description: Damage equipment report not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /damageEquipmentReports/{id}:
 *   delete:
 *     summary: Delete a damage equipment report by ID
 *     tags: [DamageEquipmentReports]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Damage equipment report ID
 *     responses:
 *       204:
 *         description: No content, damage equipment report deleted successfully
 *       500:
 *         description: Server error
 */

const damageEquipmentReportRouter = express.Router();

/**
 * @swagger
 * /damageEquipmentReports/{id}:
 *   get:
 *     summary: Get damage equipment report by ID
 *     tags: [DamageEquipmentReports]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Damage equipment report ID
 *     responses:
 *       200:
 *         description: Damage equipment report data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DamageEquipmentReport'
 *       404:
 *         description: Damage equipment report not found
 *       500:
 *         description: Server error
 */
damageEquipmentReportRouter.get(
  "/damageEquipmentReports/:id",
  DamageEquipmentReportController.getById
);

/**
 * @swagger
 * /damageEquipmentReports:
 *   get:
 *     summary: Get all damage equipment reports
 *     tags: [DamageEquipmentReports]
 *     responses:
 *       200:
 *         description: List of all damage equipment reports
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DamageEquipmentReport'
 *       500:
 *         description: Server error
 */
damageEquipmentReportRouter.get(
  "/damageEquipmentReports",
  DamageEquipmentReportController.getAll
);

/**
 * @swagger
 * /damageEquipmentReports:
 *   post:
 *     summary: Create a new damage equipment report
 *     tags: [DamageEquipmentReports]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DamageEquipmentReport'
 *     responses:
 *       201:
 *         description: Damage equipment report created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DamageEquipmentReport'
 *       500:
 *         description: Server error
 */
damageEquipmentReportRouter.post(
  "/damageEquipmentReports",
  DamageEquipmentReportController.create
);

/**
 * @swagger
 * /damageEquipmentReports/{id}:
 *   put:
 *     summary: Update a damage equipment report by ID
 *     tags: [DamageEquipmentReports]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Damage equipment report ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DamageEquipmentReport'
 *     responses:
 *       200:
 *         description: Damage equipment report updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DamageEquipmentReport'
 *       404:
 *         description: Damage equipment report not found
 *       500:
 *         description: Server error
 */
damageEquipmentReportRouter.put(
  "/damageEquipmentReports/:id",
  DamageEquipmentReportController.update
);

/**
 * @swagger
 * /damageEquipmentReports/{id}:
 *   delete:
 *     summary: Delete a damage equipment report by ID
 *     tags: [DamageEquipmentReports]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Damage equipment report ID
 *     responses:
 *       204:
 *         description: No content, damage equipment report deleted successfully
 *       500:
 *         description: Server error
 */
damageEquipmentReportRouter.delete(
  "/damageEquipmentReports/:id",
  DamageEquipmentReportController.delete
);

export default damageEquipmentReportRouter;
