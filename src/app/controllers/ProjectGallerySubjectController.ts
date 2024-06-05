
import { ProjectGallerySubjectDoc } from "../../domain/docs/ProjectGallerySubject";
import ProjectGallerySubjectService from "../../domain/services/ProjectGallerySubjectService";
import BaseController from "./BaseController";

class ProjectGallerySubjectController extends BaseController<ProjectGallerySubjectDoc> {
  private projectGallerySubjectService = this.service as typeof ProjectGallerySubjectService;
  constructor() {
    super(ProjectGallerySubjectService);
  }
}
export default new ProjectGallerySubjectController();
