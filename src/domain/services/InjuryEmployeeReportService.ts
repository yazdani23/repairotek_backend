import { InjuryEmployeeReportDoc } from "../docs/InjuryEmployeeReport";
import BaseService from "./BaseService";
import InjuryEmployeeReportRepository from "../repositories/InjuryEmployeeReportRepository";
import { InjuryEmployeeReportPatchValidationSchema, InjuryEmployeeReportValidationSchema } from "../validations/InjuryEmployeeReportValidation";

class InjuryEmployeeReportService extends BaseService<InjuryEmployeeReportDoc> {
  private injuryEmployeeReportRepository = this
    .repository as typeof InjuryEmployeeReportRepository;
  constructor() {
    super(
      InjuryEmployeeReportRepository,
      InjuryEmployeeReportValidationSchema,
      InjuryEmployeeReportPatchValidationSchema
    );
  }
}
export default new InjuryEmployeeReportService();
