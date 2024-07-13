import { Schema } from "mongoose";
import ReportModel from "./ReportModel";
import { DamageEquipmentReportDoc } from "../docs/DamageEquipmentReport";
import { generateModel } from "../../utils/generators/modelGenerator";

///////////// Discriminat //////////////////
const DamageEquipmentReportModel = generateModel<DamageEquipmentReportDoc>(
  "DamageEquipmentReport",
  {
    equipmentId: {
      type: Schema.Types.ObjectId,
      ref: "Equipment",
      required: true,
    },
  },
  [],
  ReportModel
);

export default DamageEquipmentReportModel;
