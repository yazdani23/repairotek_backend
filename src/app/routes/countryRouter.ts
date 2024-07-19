
import express from "express";
import CountryController from "../controllers/CountryController";

const countryRouter = express.Router();

countryRouter.get("/countries/:id", CountryController.getById);
countryRouter.get("/countries", CountryController.getAll);
countryRouter.post("/countries", CountryController.create);
countryRouter.put("/countries/:id", CountryController.update);
countryRouter.delete("/countries/:id", CountryController.delete);

export default countryRouter;
