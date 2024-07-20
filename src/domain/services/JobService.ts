import { JobDoc } from "../docs/Job";

import BaseService from "./BaseService";
import JobRepository from "../repositories/JobRepository";
import {JobValidationSchema, JobPatchValidationSchema } from "../validations/JobValidation";

class JobService extends BaseService<JobDoc> {
  constructor() {
    super(JobRepository, JobValidationSchema, JobPatchValidationSchema);
  }
}
export default new JobService();
