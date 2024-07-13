import express from "express";
import AdminController from "../controllers/AdminController";

const adminRouter = express.Router();

adminRouter.get("/admins/:id", AdminController.getById);
adminRouter.get("/admins", AdminController.getAll);
adminRouter.post("/admins", AdminController.create);
adminRouter.put("/admins/:id", AdminController.update);
adminRouter.delete("/admins/:id", AdminController.delete);

export default adminRouter;
