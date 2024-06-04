
import { DepartmentTypeDoc } from "../../domain/docs/DepartmentType";
import DepartmentTypeService from "../../domain/services/DepartmentTypeService";
import BaseController from "./BaseController";

class DepartmentTypeController extends BaseController<DepartmentTypeDoc> {
  private departmentTypeService = this.service as typeof DepartmentTypeService;
  constructor() {
    super(DepartmentTypeService);
  }
}
export default new DepartmentTypeController();
