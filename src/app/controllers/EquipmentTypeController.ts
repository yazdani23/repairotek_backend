
import { EquipmentTypeDoc } from "../../domain/docs/EquipmentType";
import EquipmentTypeService from "../../domain/services/EquipmentTypeService";
import BaseController from "./BaseController";

class EquipmentTypeController extends BaseController<EquipmentTypeDoc> {
  private equipmentTypeService = this.service as typeof EquipmentTypeService;
  constructor() {
    super(EquipmentTypeService);
  }
}
export default new EquipmentTypeController();
