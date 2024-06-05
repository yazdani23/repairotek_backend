
import express from "express";
import ProjectGallerySubjectController from "../controllers/ProjectGallerySubjectController";

const projectGallerySubjectRouter = express.Router();

projectGallerySubjectRouter.get("/projectGallerySubjects/:id", ProjectGallerySubjectController.getById);
projectGallerySubjectRouter.get("/projectGallerySubjects", ProjectGallerySubjectController.getAll);
projectGallerySubjectRouter.post("/projectGallerySubjects", ProjectGallerySubjectController.create);
projectGallerySubjectRouter.put("/projectGallerySubjects/:id", ProjectGallerySubjectController.update);
projectGallerySubjectRouter.delete("/projectGallerySubjects/:id", ProjectGallerySubjectController.delete);

export default projectGallerySubjectRouter;
