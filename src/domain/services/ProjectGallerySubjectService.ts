
import { ProjectGallerySubjectDoc } from "../docs/ProjectGallerySubject";
import BaseService from "./BaseService";
import ProjectGallerySubjectRepository from "../repositories/ProjectGallerySubjectRepository";
import ProjectGallerySubjectValidationSchema from "../validations/ProjectGallerySubjectValidation";

class ProjectGallerySubjectService extends BaseService<ProjectGallerySubjectDoc> {
  private projectGallerySubjectRepository = this.repository as typeof ProjectGallerySubjectRepository;
  constructor() {
    super(ProjectGallerySubjectRepository, ProjectGallerySubjectValidationSchema);
  }
}
export default new ProjectGallerySubjectService();
