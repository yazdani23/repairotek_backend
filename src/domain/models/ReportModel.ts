import { ReportDoc } from "../docs/Report";
import { generateSchema } from "../../utils/generators/modelGenerator";
import { Schema } from "mongoose";

const ReportModel = generateSchema<ReportDoc>("Report", {
  title: { type: String, required: true},
  reportSubjectId: {
    type: Schema.Types.ObjectId,
    ref: "ReportSubject",
    required: true,
  },
  description: { type: String, required: false, default: "" }, // Optional with default empty string
  reportDate: { type: Date, required: true },
  reportTime: { type: String, required: true },
  projectGalleryId: [
    { type: Schema.Types.ObjectId, ref: "ProjectGallery", required: true },
  ],
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default ReportModel;
