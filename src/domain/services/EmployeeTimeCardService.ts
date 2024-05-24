import { EmployeeTimeCardDoc } from "../docs/EmployeeTimeCard";

import BaseService from "./BaseService";
import EmployeeTimeCardRepository from "../repositories/EmployeeTimeCardRepository";
import EmployeeTimeCardValidationSchema from "../validations/EmployeeTimeCardValidation";

class EmployeeTimeCardService extends BaseService<EmployeeTimeCardDoc> {
  constructor() {
    super(EmployeeTimeCardRepository, EmployeeTimeCardValidationSchema);
  }
}
export default new EmployeeTimeCardService();
