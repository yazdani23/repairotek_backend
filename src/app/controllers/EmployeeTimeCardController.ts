
import { EmployeeTimeCardDoc } from "../../domain/docs/EmployeeTimeCard";
import EmployeeTimeCardService from "../../domain/services/EmployeeTimeCardService";
import BaseController from "./BaseController";

class EmployeeTimeCardController extends BaseController<EmployeeTimeCardDoc> {
  private employeeTimeCardService = this.service as typeof EmployeeTimeCardService;
  constructor() {
    super(EmployeeTimeCardService);
  }
}
export default new EmployeeTimeCardController();
