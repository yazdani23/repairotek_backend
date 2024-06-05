
import { generateSchema } from "../../utils/generators/modelGenerator";
import { ReportSubjectDoc } from "../docs/ReportSubject";

const types = ["Daily", "Injury Employee", "Damage Equipment"];
const ReportSubjectModel = generateSchema<ReportSubjectDoc>("ReportSubject", {
  title: { type: String, required: true },
  description: { type: String, required: false },
});


export default ReportSubjectModel;