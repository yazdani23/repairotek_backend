import { DamageEquipmentReportDoc } from "../docs/DamageEquipmentReport";
import BaseService from "./BaseService";
import DamageEquipmentReportRepository from "../repositories/DamageEquipmentReportRepository";
import {
  DamageEquipmentReportValidationSchema,
  DamageEquipmentReportPatchValidationSchema,
} from "../validations/DamageEquipmentReportValidation";

class DamageEquipmentReportService extends BaseService<DamageEquipmentReportDoc> {
  private damageEquipmentReportRepository = this
    .repository as typeof DamageEquipmentReportRepository;
  constructor() {
    super(
      DamageEquipmentReportRepository,
      DamageEquipmentReportValidationSchema,
      DamageEquipmentReportPatchValidationSchema
    );
  }
}
export default new DamageEquipmentReportService();
