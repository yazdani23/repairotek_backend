
import { DepartmentDoc } from "../../domain/docs/Department";
import DepartmentService from "../../domain/services/DepartmentService";
import BaseController from "./BaseController";

class DepartmentController extends BaseController<DepartmentDoc> {
  private departmentService = this.service as typeof DepartmentService;
  constructor() {
    super(DepartmentService);
  }
}
export default new DepartmentController();
