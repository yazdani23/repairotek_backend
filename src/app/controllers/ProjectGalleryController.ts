import BaseController from "./BaseController";
import ProjectGalleryService from "../../domain/services/ProjectGalleryService";
import { ProjectGalleryDoc } from "../../domain/docs/ProjectGallery";

class ProjectGalleryController extends BaseController<ProjectGalleryDoc> {
  private projectGalleryService = this.service as typeof ProjectGalleryService;
  constructor() {
    super(ProjectGalleryService);
  }
}
export default new ProjectGalleryController();

// const ProjectController = crudControllerGenerator("Project", ProjectService);
// export default ProjectController;
