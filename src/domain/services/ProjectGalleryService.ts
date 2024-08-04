import { ProjectGalleryDoc } from "../docs/ProjectGallery";
import ProjectGalleryRepository from "../repositories/ProjectGalleryRepository";
import {ProjectGalleryPatchSchema, ProjectGallerySchema} from "../validations/ProjectGalleryValidation";
import BaseService from "./BaseService";

class ReportService extends BaseService<ProjectGalleryDoc> {
  constructor() {
    super(ProjectGalleryRepository, ProjectGallerySchema, ProjectGalleryPatchSchema);
  }
}
export default new ReportService();
