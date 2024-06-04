
import { EquipmentDoc } from "../../domain/docs/Equipment";
import EquipmentService from "../../domain/services/EquipmentService";
import BaseController from "./BaseController";

class EquipmentController extends BaseController<EquipmentDoc> {
  private equipmentService = this.service as typeof EquipmentService;
  constructor() {
    super(EquipmentService);
  }
}
export default new EquipmentController();
