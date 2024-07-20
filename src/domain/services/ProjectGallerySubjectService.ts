
import { ProjectGallerySubjectDoc } from "../docs/ProjectGallerySubject";
import BaseService from "./BaseService";
import ProjectGallerySubjectRepository from "../repositories/ProjectGallerySubjectRepository";
import {ProjectGallerySubjectPatchValidationSchema, ProjectGallerySubjectValidationSchema} from "../validations/ProjectGallerySubjectValidation";

class ProjectGallerySubjectService extends BaseService<ProjectGallerySubjectDoc> {
  private projectGallerySubjectRepository = this.repository as typeof ProjectGallerySubjectRepository;
  constructor() {
    super(ProjectGallerySubjectRepository, ProjectGallerySubjectValidationSchema, ProjectGallerySubjectPatchValidationSchema);
  }
}
export default new ProjectGallerySubjectService();
