import express from "express";
import TimeCardEmployeeController from "../controllers/TimeCardEmployeeController";

const timeCardEmployeeRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: TimeCardEmployees
 *   description: Endpoint for managing TimeCardEmployees
 */

/**
 * @swagger
 * /timeCardEmployees/{id}:
 *   get:
 *     tags: [TimeCardEmployees]
 *     summary: Get timeCard employee by ID
 *     description: Retrieve a timeCard employee by its ID
 *     operationId: getTimeCardEmployeeById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: TimeCard employee data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TimeCardEmployee'
 *       404:
 *         description: TimeCard employee not found
 */

timeCardEmployeeRouter.get(
  "/timeCardEmployees/:id",
  TimeCardEmployeeController.getById
);

/**
 * @swagger
 * /timeCardEmployees:
 *   get:
 *     tags: [TimeCardEmployees]
 *     summary: Get all timeCard employees
 *     description: Retrieve a list of all timeCard employees
 *     operationId: getAllTimeCardEmployees
 *     responses:
 *       200:
 *         description: A list of timeCard employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TimeCardEmployee'
 */

timeCardEmployeeRouter.get(
  "/timeCardEmployees",
  TimeCardEmployeeController.getAll
);

/**
 * @swagger
 * /timeCardEmployees:
 *   post:
 *     tags: [TimeCardEmployees]
 *     summary: Create a new timeCard employee
 *     description: Create a new timeCard employee with the provided data
 *     operationId: createTimeCardEmployee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TimeCardEmployee'
 *     responses:
 *       201:
 *         description: TimeCard employee created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TimeCardEmployee'
 */

timeCardEmployeeRouter.post(
  "/timeCardEmployees",
  TimeCardEmployeeController.create
);

/**
 * @swagger
 * /timeCardEmployees/{id}:
 *   put:
 *     tags: [TimeCardEmployees]
 *     summary: Update a timeCard employee
 *     description: Update a timeCard employee by its ID
 *     operationId: updateTimeCardEmployee
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
 *             $ref: '#/components/schemas/TimeCardEmployee'
 *     responses:
 *       200:
 *         description: TimeCard employee updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TimeCardEmployee'
 *       404:
 *         description: TimeCard employee not found
 */

timeCardEmployeeRouter.put(
  "/timeCardEmployees/:id",
  TimeCardEmployeeController.update
);
timeCardEmployeeRouter.patch(
  "/timeCardEmployees/:id",
  TimeCardEmployeeController.edit
);

/**
 * @swagger
 * /timeCardEmployees/{id}:
 *   delete:
 *     tags: [TimeCardEmployees]
 *     summary: Delete a timeCard employee
 *     description: Delete a timeCard employee by its ID
 *     operationId: deleteTimeCardEmployee
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
 *         description: TimeCard employee not found
 */

timeCardEmployeeRouter.delete(
  "/timeCardEmployees/:id",
  TimeCardEmployeeController.delete
);

export default timeCardEmployeeRouter;
