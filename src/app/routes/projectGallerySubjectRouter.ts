import express from "express";
import ProjectGallerySubjectController from "../controllers/ProjectGallerySubjectController";

const projectGallerySubjectRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: ProjectGallerySubjects
 *   description: Endpoint for managing ProjectGallerySubjects
 */

/**
 * @swagger
 * /projectGallerySubjects/{id}:
 *   get:
 *     tags: [ProjectGallerySubjects]
 *     summary: Get project gallery subject by ID
 *     description: Retrieve a project gallery subject by its ID
 *     operationId: getProjectGallerySubjectById
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project gallery subject data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectGallerySubject'
 *       404:
 *         description: Project gallery subject not found
 */

projectGallerySubjectRouter.get(
  "/projectGallerySubjects/:id",
  ProjectGallerySubjectController.getById
);

/**
 * @swagger
 * /projectGallerySubjects:
 *   get:
 *     tags: [ProjectGallerySubjects]
 *     summary: Get all project gallery subjects
 *     description: Retrieve a list of all project gallery subjects
 *     operationId: getAllProjectGallerySubjects
 *     responses:
 *       200:
 *         description: A list of project gallery subjects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProjectGallerySubject'
 */

projectGallerySubjectRouter.get(
  "/projectGallerySubjects",
  ProjectGallerySubjectController.getAll
);

/**
 * @swagger
 * /projectGallerySubjects:
 *   post:
 *     tags: [ProjectGallerySubjects]
 *     summary: Create a new project gallery subject
 *     description: Create a new project gallery subject with the provided data
 *     operationId: createProjectGallerySubject
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProjectGallerySubject'
 *     responses:
 *       201:
 *         description: Project gallery subject created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectGallerySubject'
 */

projectGallerySubjectRouter.post(
  "/projectGallerySubjects",
  ProjectGallerySubjectController.create
);

/**
 * @swagger
 * /projectGallerySubjects/{id}:
 *   put:
 *     tags: [ProjectGallerySubjects]
 *     summary: Update a project gallery subject
 *     description: Update a project gallery subject by its ID
 *     operationId: updateProjectGallerySubject
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
 *             $ref: '#/components/schemas/ProjectGallerySubject'
 *     responses:
 *       200:
 *         description: Project gallery subject updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProjectGallerySubject'
 *       404:
 *         description: Project gallery subject not found
 */

projectGallerySubjectRouter.put(
  "/projectGallerySubjects/:id",
  ProjectGallerySubjectController.update
);

projectGallerySubjectRouter.patch(
  "/projectGallerySubjects/:id",
  ProjectGallerySubjectController.edit
);

/**
 * @swagger
 * /projectGallerySubjects/{id}:
 *   delete:
 *     tags: [ProjectGallerySubjects]
 *     summary: Delete a project gallery subject
 *     description: Delete a project gallery subject by its ID
 *     operationId: deleteProjectGallerySubject
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
 *         description: Project gallery subject not found
 */

projectGallerySubjectRouter.delete(
  "/projectGallerySubjects/:id",
  ProjectGallerySubjectController.delete
);

export default projectGallerySubjectRouter;
