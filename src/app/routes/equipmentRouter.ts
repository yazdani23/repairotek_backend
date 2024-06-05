import express from "express";
import EquipmentController from "../controllers/EquipmentController";

const equipmentRouter = express.Router();

equipmentRouter.get("/equipment", EquipmentController.getAll);
equipmentRouter.get("/equipment/:id", EquipmentController.getById);
equipmentRouter.post("/equipment", EquipmentController.create);
equipmentRouter.put("/equipment/:id", EquipmentController.update);
equipmentRouter.delete("/equipment/:id", EquipmentController.delete);

export default equipmentRouter;
