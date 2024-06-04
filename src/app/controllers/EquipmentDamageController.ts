
import { EquipmentDamageDoc } from "../../domain/docs/EquipmentDamage";
import EquipmentDamageService from "../../domain/services/EquipmentDamageService";
import BaseController from "./BaseController";

class EquipmentDamageController extends BaseController<EquipmentDamageDoc> {
  private equipmentDamageService = this.service as typeof EquipmentDamageService;
  constructor() {
    super(EquipmentDamageService);
  }
}
export default new EquipmentDamageController();
