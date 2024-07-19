import { JobDoc } from "../docs/Job";
import { generateSchema } from "../../utils/generators/modelGenerator";

const JobModel = generateSchema<JobDoc>("Job", {
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
});

export default JobModel;
