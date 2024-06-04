import { MaterialDoc } from "../../domain/docs/Material";
import MaterialService from "../../domain/services/MaterialService";
import BaseController from "./BaseController";

class MaterialController extends BaseController<MaterialDoc> {
  private materialService = this.service as typeof MaterialService;
  constructor() {
    super(MaterialService);
  }
}
export default new MaterialController();
