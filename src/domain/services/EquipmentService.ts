import BaseService from "./BaseService";
import EquipmentRepository from "../repositories/EquipmentRepository";
import {EquipmentPatchValidationSchema, EquipmentValidationSchema} from "../validations/EquipmentValidation";
import { EquipmentDoc } from "../docs/Equipment";

class EquipmentService extends BaseService<EquipmentDoc> {
  constructor() {
    super(EquipmentRepository, EquipmentValidationSchema, EquipmentPatchValidationSchema);
  }
}
export default new EquipmentService();
