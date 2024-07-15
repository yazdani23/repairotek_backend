
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
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
