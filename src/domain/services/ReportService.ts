import { ReportDoc } from "../docs/Report";

import BaseService from "./BaseService";
import ReportRepository from "../repositories/ReportRepository";
import {ReportPatchValidationSchema, ReportValidationSchema} from "../validations/ReportValidation";

class ReportService extends BaseService<ReportDoc> {
  constructor() {
    super(ReportRepository, ReportValidationSchema, ReportPatchValidationSchema);
  }
}
export default new ReportService();
