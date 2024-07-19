
import { TestDoc } from "../docs/Test";
import BaseService from "./BaseService";
import TestRepository from "../repositories/TestRepository";
import TestValidationSchema from "../validations/TestValidation";

class TestService extends BaseService<TestDoc> {
  private testRepository = this.repository as typeof TestRepository;
  constructor() {
    super(TestRepository, TestValidationSchema);
  }
}
export default new TestService();
