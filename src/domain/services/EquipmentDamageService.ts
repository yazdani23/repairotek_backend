

import { EquipmentDamageDoc } from "../docs/EquipmentDamage";

import BaseService from "./BaceService";
import EquipmentDamageRepository from "../repositories/EquipmentDamageRepository";
import EquipmentDamageValidationSchema from "../validations/EquipmentDamageValidation";

class EquipmentDamageService extends BaseService<EquipmentDamageDoc> {
  constructor(
  ) {
    super(EquipmentDamageRepository, EquipmentDamageValidationSchema);
  }
}
export default new EquipmentDamageService();