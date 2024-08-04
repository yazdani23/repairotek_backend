import { ReportSubjectDoc } from "../docs/ReportSubject";
import BaseService from "./BaseService";
import ReportSubjectRepository from "../repositories/ReportSubjectRepository";
import {
  ReportSubjectPatchValidationSchema,
  ReportSubjectValidationSchema,
} from "../validations/ReportSubjectValidation";

class ReportSubjectService extends BaseService<ReportSubjectDoc> {
  private reportSubjectRepository = this
    .repository as typeof ReportSubjectRepository;
  constructor() {
    super(
      ReportSubjectRepository,
      ReportSubjectValidationSchema,
      ReportSubjectPatchValidationSchema
    );
  }
}
export default new ReportSubjectService();
