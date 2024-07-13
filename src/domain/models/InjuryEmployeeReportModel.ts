import { Schema } from "mongoose";
import { InjuryEmployeeReportDoc } from "../docs/InjuryEmployeeReport";
import ReportModel from "./ReportModel";
import { generateModel } from "../../utils/generators/modelGenerator";

///////////// Discriminat //////////////////
const InjuryEmployeeReportModel = generateModel<InjuryEmployeeReportDoc>(
  "InjuryEmployeeReport",
  {
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
  },
  [],
  ReportModel
);

export default InjuryEmployeeReportModel;
