
import { TestDoc } from "../docs/Test";
import { generateSchema } from "../../utils/generators/modelGenerator";

const TestModel = generateSchema<TestDoc>("Test", {

});

export default TestModel;

