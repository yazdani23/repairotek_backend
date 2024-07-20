import { ProjectCostDoc } from "../docs/ProjectCost";

import BaseService from "./BaseService";
import ProjectCostRepository from "../repositories/ProjectCostRepository";
import {ProjectCostPatchValidationSchema, ProjectCostValidationSchema} from "../validations/ProjectCostValidation";

class ProjectCostService extends BaseService<ProjectCostDoc> {
  constructor() {
    super(ProjectCostRepository, ProjectCostValidationSchema, ProjectCostPatchValidationSchema);
  }
}
export default new ProjectCostService();
