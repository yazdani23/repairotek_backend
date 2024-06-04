import  express from "express";
import ProjectController from "../controllers/ProjectController";
const projectRouter = express.Router();

projectRouter.get("/projects", ProjectController.getAll);
projectRouter.get("/projects/:id", ProjectController.getById);
projectRouter.post("/projects", ProjectController.create);
projectRouter.put("/projects/:id", ProjectController.update);
projectRouter.delete("/projects/:id", ProjectController.delete);
projectRouter.get("/projects/gallery/:id", ProjectController.getProjectGallery);
projectRouter.get("/projects/statuses/all", ProjectController.getProjectStatuses);


export default projectRouter;
