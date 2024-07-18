
import { RoadDoc } from "../../domain/docs/Road";
import RoadService from "../../domain/services/RoadService";
import BaseController from "./BaseController";

class RoadController extends BaseController<RoadDoc> {
  private roadService = this.service as typeof RoadService;
  constructor() {
    super(RoadService);
  }
}
export default new RoadController();
