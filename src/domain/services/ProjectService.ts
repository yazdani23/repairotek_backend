import { ProjectDoc } from "../docs/Project";
import BaseService from "./BaseService";
import ProjectRepository from "../repositories/ProjectRepository";
import {ProjectPatchValidationSchema, ProjectValidationSchema} from "../validations/ProjectValidation";
import logger from "../../utils/helpers/logger";
import { ProjectGalleryDoc } from "../docs/ProjectGallery";

class ProjectService extends BaseService<ProjectDoc> {
  private projectRepository = this.repository as typeof ProjectRepository;
  constructor() {
    super(ProjectRepository, ProjectValidationSchema,ProjectPatchValidationSchema);
  }
  async getProjectGallery(
    projectId: string
  ): Promise<ProjectGalleryDoc[] | null> {
    const gallery = await this.projectRepository.getGallery(projectId);
    logger.info(gallery);
    return gallery;
  }
  // async getProjectStatuses(
  // ): Promise<String[] | null> {
  //   const statuses = await this.projectRepository.getProjectStatuses();
  //   logger.info(statuses);
  //   return statuses;
  // }
}
export default new ProjectService();
