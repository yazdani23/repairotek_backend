import { ProjectAssignmentDoc } from "../docs/ProjectAssignment";

import BaseService from "./BaseService";
import ProjectAssignmentRepository from "../repositories/ProjectAssignmentRepository";
import {
  ProjectAssignmentPatchValidationSchema,
  ProjectAssignmentValidationSchema,
} from "../validations/ProjectAssignmentValidation";

class ProjectAssignmentService extends BaseService<ProjectAssignmentDoc> {
  constructor() {
    super(
      ProjectAssignmentRepository,
      ProjectAssignmentValidationSchema,
      ProjectAssignmentPatchValidationSchema
    );
  }
}
export default new ProjectAssignmentService();
