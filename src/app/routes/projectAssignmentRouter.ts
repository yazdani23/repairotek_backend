import express from "express";
import ProjectAssignmentController from "../controllers/ProjectAssignmentController";

const projectAssignmentRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: ProjectAssignments
 *   description: Endpoint for managing ProjectAssignments
 */

/**
 * @swagger
 * /projectAssignments/{id}:
 *   get:
 *     tags: [ProjectAssignments]
 *     summary: Get project assignment by ID
 *     description: Retrieve a project assignment by its ID
 *     operationId: getProjectAssignmentById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project assignment data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectAssignment'
 *       404:
 *         description: Project assignment not found
 */

projectAssignmentRouter.get(
  "/projectAssignments/:id",
  ProjectAssignmentController.getById
);

/**
 * @swagger
 * /projectAssignments:
 *   get:
 *     tags: [ProjectAssignments]
 *     summary: Get all project assignments
 *     description: Retrieve a list of all project assignments
 *     operationId: getAllProjectAssignments
 *     responses:
 *       200:
 *         description: A list of project assignments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProjectAssignment'
 */

projectAssignmentRouter.get(
  "/projectAssignments",
  ProjectAssignmentController.getAll
);

/**
 * @swagger
 * /projectAssignments:
 *   post:
 *     tags: [ProjectAssignments]
 *     summary: Create a new project assignment
 *     description: Create a new project assignment with the provided data
 *     operationId: createProjectAssignment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProjectAssignment'
 *     responses:
 *       201:
 *         description: Project assignment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectAssignment'
 */

projectAssignmentRouter.post(
  "/projectAssignments",
  ProjectAssignmentController.create
);

/**
 * @swagger
 * /projectAssignments/{id}:
 *   put:
 *     tags: [ProjectAssignments]
 *     summary: Update a project assignment
 *     description: Update a project assignment by its ID
 *     operationId: updateProjectAssignment
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
 *             $ref: '#/components/schemas/ProjectAssignment'
 *     responses:
 *       200:
 *         description: Project assignment updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectAssignment'
 *       404:
 *         description: Project assignment not found
 */

projectAssignmentRouter.put(
  "/projectAssignments/:id",
  ProjectAssignmentController.update
);

projectAssignmentRouter.patch(
  "/projectAssignments/:id",
  ProjectAssignmentController.edit
);

/**
 * @swagger
 * /projectAssignments/{id}:
 *   delete:
 *     tags: [ProjectAssignments]
 *     summary: Delete a project assignment
 *     description: Delete a project assignment by its ID
 *     operationId: deleteProjectAssignment
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
 *         description: Project assignment not found
 */

projectAssignmentRouter.delete(
  "/projectAssignments/:id",
  ProjectAssignmentController.delete
);

export default projectAssignmentRouter;

