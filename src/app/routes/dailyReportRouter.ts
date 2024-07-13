import express from "express";
import DailyReportController from "../controllers/DailyReportController";

/**
 * @swagger
 * tags:
 *   name: DailyReports
 *   description: Daily Report management
 */

/**
 * @swagger
 * /dailyReports:
 *   get:
 *     summary: Get all daily reports
 *     tags: [DailyReports]
 *     responses:
 *       200:
 *         description: List of all daily reports
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DailyReport'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /dailyReports/{id}:
 *   get:
 *     summary: Get daily report by ID
 *     tags: [DailyReports]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Daily report ID
 *     responses:
 *       200:
 *         description: Daily report data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DailyReport'
 *       404:
 *         description: Daily report not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /dailyReports:
 *   post:
 *     summary: Create a new daily report
 *     tags: [DailyReports]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DailyReport'
 *     responses:
 *       201:
 *         description: Daily report created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DailyReport'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /dailyReports/{id}:
 *   put:
 *     summary: Update a daily report by ID
 *     tags: [DailyReports]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Daily report ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DailyReport'
 *     responses:
 *       200:
 *         description: Daily report updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DailyReport'
 *       404:
 *         description: Daily report not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /dailyReports/{id}:
 *   delete:
 *     summary: Delete a daily report by ID
 *     tags: [DailyReports]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Daily report ID
 *     responses:
 *       204:
 *         description: No content, daily report deleted successfully
 *       500:
 *         description: Server error
 */

const dailyReportRouter = express.Router();

/**
 * @swagger
 * /dailyReports/{id}:
 *   get:
 *     summary: Get daily report by ID
 *     tags: [DailyReports]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Daily report ID
 *     responses:
 *       200:
 *         description: Daily report data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DailyReport'
 *       404:
 *         description: Daily report not found
 *       500:
 *         description: Server error
 */
dailyReportRouter.get("/dailyReports/:id", DailyReportController.getById);

/**
 * @swagger
 * /dailyReports:
 *   get:
 *     summary: Get all daily reports
 *     tags: [DailyReports]
 *     responses:
 *       200:
 *         description: List of all daily reports
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/DailyReport'
 *       500:
 *         description: Server error
 */
dailyReportRouter.get("/dailyReports", DailyReportController.getAll);

/**
 * @swagger
 * /dailyReports:
 *   post:
 *     summary: Create a new daily report
 *     tags: [DailyReports]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DailyReport'
 *     responses:
 *       201:
 *         description: Daily report created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DailyReport'
 *       500:
 *         description: Server error
 */
dailyReportRouter.post("/dailyReports", DailyReportController.create);

/**
 * @swagger
 * /dailyReports/{id}:
 *   put:
 *     summary: Update a daily report by ID
 *     tags: [DailyReports]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Daily report ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/DailyReport'
 *     responses:
 *       200:
 *         description: Daily report updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DailyReport'
 *       404:
 *         description: Daily report not found
 *       500:
 *         description: Server error
 */
dailyReportRouter.put("/dailyReports/:id", DailyReportController.update);

/**
 * @swagger
 * /dailyReports/{id}:
 *   delete:
 *     summary: Delete a daily report by ID
 *     tags: [DailyReports]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Daily report ID
 *     responses:
 *       204:
 *         description: No content, daily report deleted successfully
 *       500:
 *         description: Server error
 */
dailyReportRouter.delete("/dailyReports/:id", DailyReportController.delete);

export default dailyReportRouter;
