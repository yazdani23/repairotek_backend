
import express from "express";
import ProjectController from "../controllers/ProjectController";

const projectRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: Endpoint for managing Projects
 */

/**
 * @swagger
 * /projects:
 *   get:
 *     tags: [Projects]
 *     summary: Get all projects
 *     description: Retrieve a list of all projects
 *     operationId: getAllProjects
 *     responses:
 *       200:
 *         description: A list of projects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 */

projectRouter.get("/projects", ProjectController.getAll);

/**
 * @swagger
 * /projects/{id}:
 *   get:
 *     tags: [Projects]
 *     summary: Get project by ID
 *     description: Retrieve a project by its ID
 *     operationId: getProjectById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: Project not found
 */

projectRouter.get("/projects/:id", ProjectController.getById);

/**
 * @swagger
 * /projects:
 *   post:
 *     tags: [Projects]
 *     summary: Create a new project
 *     description: Create a new project with the provided data
 *     operationId: createProject
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       201:
 *         description: Project created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 */

projectRouter.post("/projects", ProjectController.create);

/**
 * @swagger
 * /projects/{id}:
 *   put:
 *     tags: [Projects]
 *     summary: Update a project
 *     description: Update a project by its ID
 *     operationId: updateProject
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
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       200:
 *         description: Project updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: Project not found
 */

projectRouter.put("/projects/:id", ProjectController.update);

/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     tags: [Projects]
 *     summary: Delete a project
 *     description: Delete a project by its ID
 *     operationId: deleteProject
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
 *         description: Project not found
 */

projectRouter.delete("/projects/:id", ProjectController.delete);

/**
 * @swagger
 * /projects/{id}/gallery:
 *   get:
 *     tags: [Projects]
 *     summary: Get project gallery by ID
 *     description: Retrieve the gallery of a project by its ID
 *     operationId: getProjectGallery
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project gallery data
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Gallery'
 *       404:
 *         description: Project not found
 */

projectRouter.get("/projects/:id/gallery", ProjectController.getProjectGallery);

/**
 * @swagger
 * /project-statuses:
 *   get:
 *     tags: [Projects]
 *     summary: Get all project statuses
 *     description: Retrieve a list of all project statuses
 *     operationId: getAllProjectStatuses
 *     responses:
 *       200:
 *         description: A list of project statuses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */

projectRouter.get("/project-statuses", ProjectController.getProjectStatuses);

export default projectRouter;
