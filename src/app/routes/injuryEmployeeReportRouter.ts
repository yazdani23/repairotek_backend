
import express from "express";
import InjuryEmployeeReportController from "../controllers/InjuryEmployeeReportController";

const injuryEmployeeReportRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: InjuryEmployeeReport
 *   description: Endpoint for managing InjuryEmployeeReports
 */

/**
 * @swagger
 * /injuryEmployeeReports/{id}:
 *   get:
 *     tags: [InjuryEmployeeReport]
 *     summary: Get injury employee report by ID
 *     description: Retrieve an injury employee report by its ID
 *     operationId: getInjuryEmployeeReportById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InjuryEmployeeReport'
 *       404:
 *         description: InjuryEmployeeReport not found
 */

injuryEmployeeReportRouter.get(
  "/injuryEmployeeReports/:id",
  InjuryEmployeeReportController.getById
);

/**
 * @swagger
 * /injuryEmployeeReports:
 *   get:
 *     tags: [InjuryEmployeeReport]
 *     summary: Get all injury employee reports
 *     description: Retrieve a list of all injury employee reports
 *     operationId: getAllInjuryEmployeeReports
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/InjuryEmployeeReport'
 */

injuryEmployeeReportRouter.get(
  "/injuryEmployeeReports",
  InjuryEmployeeReportController.getAll
);

/**
 * @swagger
 * /injuryEmployeeReports:
 *   post:
 *     tags: [InjuryEmployeeReport]
 *     summary: Create a new injury employee report
 *     description: Create a new injury employee report with the provided data
 *     operationId: createInjuryEmployeeReport
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/InjuryEmployeeReport'
 *     responses:
 *       201:
 *         description: InjuryEmployeeReport created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InjuryEmployeeReport'
 */

injuryEmployeeReportRouter.post(
  "/injuryEmployeeReports",
  InjuryEmployeeReportController.create
);

/**
 * @swagger
 * /injuryEmployeeReports/{id}:
 *   put:
 *     tags: [InjuryEmployeeReport]
 *     summary: Update an injury employee report
 *     description: Update an injury employee report by its ID
 *     operationId: updateInjuryEmployeeReport
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
 *             $ref: '#/components/schemas/InjuryEmployeeReport'
 *     responses:
 *       200:
 *         description: A successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/InjuryEmployeeReport'
 *       404:
 *         description: InjuryEmployeeReport not found
 */

injuryEmployeeReportRouter.put(
  "/injuryEmployeeReports/:id",
  InjuryEmployeeReportController.update
);

/**
 * @swagger
 * /injuryEmployeeReports/{id}:
 *   delete:
 *     tags: [InjuryEmployeeReport]
 *     summary: Delete an injury employee report
 *     description: Delete an injury employee report by its ID
 *     operationId: deleteInjuryEmployeeReport
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No content on successful deletion
 */

injuryEmployeeReportRouter.delete(
  "/injuryEmployeeReports/:id",
  InjuryEmployeeReportController.delete
);

export default injuryEmployeeReportRouter;

