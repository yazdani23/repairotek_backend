import { DailyReportDoc } from "../docs/DailyReport";
import ReportModel from "./ReportModel";
import { generateModel } from "../../utils/generators/modelGenerator";

///////////// Discriminat //////////////////
const DailyReportModel = generateModel<DailyReportDoc>(
  "DailyReport",
  {},
  ["__t"],
  ReportModel
);

export default DailyReportModel;
