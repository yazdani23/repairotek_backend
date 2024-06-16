
import { AdminDoc } from "../../domain/docs/Admin";
import AdminService from "../../domain/services/AdminService";
import BaseController from "./BaseController";

class AdminController extends BaseController<AdminDoc> {
  private adminService = this.service as typeof AdminService;
  constructor() {
    super(AdminService);
  }
}
export default new AdminController();
//test