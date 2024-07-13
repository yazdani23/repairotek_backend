import { TestDoc } from "../docs/Test";
import { generateModel } from "../../utils/generators/modelGenerator";

const TestModel = generateModel<TestDoc>("Test", {});

export default TestModel;
