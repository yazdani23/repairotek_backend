
import express from "express";
import DamageEquipmentReportController from "../controllers/DamageEquipmentReportController";

const damageEquipmentReportRouter = express.Router();

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
 *     tags: [DamageEquipmentReports]
 *     summary: Get all damage equipment reports
 *     description: Retrieve a list of all damage equipment reports
 *     operationId: getAllDamageEquipmentReports
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
 * /damageEquipmentReports/{id}:
 *   get:
 *     tags: [DamageEquipmentReports]
 *     summary: Get damage equipment report by ID
 *     description: Retrieve a damage equipment report by its ID
 *     operationId: getDamageEquipmentReportById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
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
 *   post:
 *     tags: [DamageEquipmentReports]
 *     summary: Create a new damage equipment report
 *     description: Create a new damage equipment report with the provided data
 *     operationId: createDamageEquipmentReport
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
 *     tags: [DamageEquipmentReports]
 *     summary: Update a damage equipment report by ID
 *     description: Update a damage equipment report by its ID
 *     operationId: updateDamageEquipmentReport
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
 *     tags: [DamageEquipmentReports]
 *     summary: Delete a damage equipment report by ID
 *     description: Delete a damage equipment report by its ID
 *     operationId: deleteDamageEquipmentReport
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
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


