
import { InsuranceDoc } from "../../domain/docs/Insurance";
import InsuranceService from "../../domain/services/InsuranceService";
import BaseController from "./BaseController";

class InsuranceController extends BaseController<InsuranceDoc> {
  private insuranceService = this.service as typeof InsuranceService;
  constructor() {
    super(InsuranceService);
  }
}
export default new InsuranceController();
