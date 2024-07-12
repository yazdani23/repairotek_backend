
import express from "express";
import TestController from "../controllers/TestController";

const testRouter = express.Router();

testRouter.get("/tests/:id", TestController.getById);
testRouter.get("/tests", TestController.getAll);
testRouter.post("/tests", TestController.create);
testRouter.put("/tests/:id", TestController.update);
testRouter.delete("/tests/:id", TestController.delete);

export default testRouter;
