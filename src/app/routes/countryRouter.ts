import express from "express";
import CountryController from "../controllers/CountryController";

/**
 * @swagger
 * tags:
 *   name: Countries
 *   description: Country management
 */

/**
 * @swagger
 * /countrys:
 *   get:
 *     summary: Get all countries
 *     tags: [Countries]
 *     responses:
 *       200:
 *         description: List of all countries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Country'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /countrys/{id}:
 *   get:
 *     summary: Get country by ID
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Country ID
 *     responses:
 *       200:
 *         description: Country data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /countrys:
 *   post:
 *     summary: Create a new country
 *     tags: [Countries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Country'
 *     responses:
 *       201:
 *         description: Country created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /countrys/{id}:
 *   put:
 *     summary: Update a country by ID
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Country ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Country'
 *     responses:
 *       200:
 *         description: Country updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /countrys/{id}:
 *   delete:
 *     summary: Delete a country by ID
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Country ID
 *     responses:
 *       204:
 *         description: No content, country deleted successfully
 *       500:
 *         description: Server error
 */

const countryRouter = express.Router();

countryRouter.get("/countrys/:id", CountryController.getById);
/**
 * @swagger
 * /countrys:
 *   get:
 *     summary: Get all countries
 *     tags: [Countries]
 *     responses:
 *       200:
 *         description: List of all countries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Country'
 *       500:
 *         description: Server error
 */
countryRouter.get("/countrys", CountryController.getAll);
/**
 * @swagger
 * /countrys:
 *   post:
 *     summary: Create a new country
 *     tags: [Countries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Country'
 *     responses:
 *       201:
 *         description: Country created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       500:
 *         description: Server error
 */
countryRouter.post("/countrys", CountryController.create);
/**
 * @swagger
 * /countrys/{id}:
 *   put:
 *     summary: Update a country by ID
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Country ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Country'
 *     responses:
 *       200:
 *         description: Country updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
countryRouter.put("/countrys/:id", CountryController.update);
/**
 * @swagger
 * /countrys/{id}:
 *   delete:
 *     summary: Delete a country by ID
 *     tags: [Countries]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Country ID
 *     responses:
 *       204:
 *         description: No content, country deleted successfully
 *       500:
 *         description: Server error
 */
countryRouter.delete("/countrys/:id", CountryController.delete);

export default countryRouter;
