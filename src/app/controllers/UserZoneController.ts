
import { UserZoneDoc } from "../../domain/docs/UserZone";
import UserZoneService from "../../domain/services/UserZoneService";
import BaseController from "./BaseController";

class UserZoneController extends BaseController<UserZoneDoc> {
  private userZoneService = this.service as typeof UserZoneService;
  constructor() {
    super(UserZoneService);
  }
}
export default new UserZoneController();
