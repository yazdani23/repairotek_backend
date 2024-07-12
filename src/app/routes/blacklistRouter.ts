
import express from "express";
import BlacklistController from "../controllers/TokenBlackListController";

const blacklistRouter = express.Router();

// blacklistRouter.get("/blacklists/:id", BlacklistController.getById);
blacklistRouter.get("/blacklists", BlacklistController.getAll);
blacklistRouter.post("/blacklists", BlacklistController.create);
// blacklistRouter.put("/blacklists/:id", BlacklistController.update);
// blacklistRouter.delete("/blacklists/:id", BlacklistController.delete);

export default blacklistRouter;
