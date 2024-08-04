
import express from "express";
import OperatorController from "../controllers/OperatorController";

const operatorRouter = express.Router();

operatorRouter.get("/operators/:id", OperatorController.getById);
operatorRouter.get("/operators", OperatorController.getAll);
operatorRouter.post("/operators", OperatorController.create);
operatorRouter.put("/operators/:id", OperatorController.update);
operatorRouter.patch("/operators/:id", OperatorController.edit);
operatorRouter.delete("/operators/:id", OperatorController.delete);

export default operatorRouter;
