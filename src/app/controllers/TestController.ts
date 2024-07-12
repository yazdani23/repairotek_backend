
import { TestDoc } from "../../domain/docs/Test";
import TestService from "../../domain/services/TestService";
import BaseController from "./BaseController";

class TestController extends BaseController<TestDoc> {
  private testService = this.service as typeof TestService;
  constructor() {
    super(TestService);
  }
}
export default new TestController();
