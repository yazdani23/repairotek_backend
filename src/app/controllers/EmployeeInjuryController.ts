
import { EmployeeInjuryDoc } from "../../domain/docs/EmployeeInjury";
import EmployeeInjuryService from "../../domain/services/EmployeeInjuryService";
import BaseController from "./BaseController";

class EmployeeInjuryController extends BaseController<EmployeeInjuryDoc> {
  private employeeInjuryService = this.service as typeof EmployeeInjuryService;
  constructor() {
    super(EmployeeInjuryService);
  }
}
export default new EmployeeInjuryController();
