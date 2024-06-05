import { Schema } from "mongoose";
import { ProjectCostDoc } from "../docs/ProjectCost";
import { generateSchema } from "../../utils/generators/modelGenerator";

const ProjectCostModel = generateSchema<ProjectCostDoc>("ProjectCost", {
  projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
  materials: [
    {
      materialId: {
        type: Schema.Types.ObjectId,
        ref: "Material",
        required: true,
      },
      value: {
        type: Number,
        required: true,
      },
      costPerUnit: {
        type: Number,
        required: true,
      },
    },
  ],
  equipment: [
    {
      equipmentId: {
        type: Schema.Types.ObjectId,
        ref: "Equipment",
        required: true,
      },
      countHour: {
        type: Number,
        required: true,
      },
      costPerHour: {
        type: Number,
        required: true,
      },
    },
  ],
  employees: [
    {
      employeeId: {
        type: Schema.Types.ObjectId,
        ref: "Employee",
        required: true,
      },
      countHour: {
        type: Number,
        required: true,
      },
      costPerHour: {
        type: Number,
        required: true,
      },
    },
  ],
  costDate: { type: Date, required: true },
  totalCost: { type: Number, required: true },
});


export default ProjectCostModel;
 

// // Subdocument Schema برای مواد
// const materialSchema = new Schema({
//   materialId: { type: Schema.Types.ObjectId, ref: "Material", required: true },
//   value: { type: Number, required: true },
//   costPerUnit: { type: Number, required: true },
// }, { _id: false });

// // Subdocument Schema برای تجهیزات
// const equipmentSchema = new Schema({
//   equipmentId: { type: Schema.Types.ObjectId, ref: "Equipment", required: true },
//   countHour: { type: Number, required: true },
//   costPerHour: { type: Number, required: true },
// }, { _id: false });

// // Subdocument Schema برای کارمندان
// const employeeSchema = new Schema({
//   employeeId: { type: Schema.Types.ObjectId, ref: "Employee", required: true },
//   countHour: { type: Number, required: true },
//   costPerHour: { type: Number, required: true },
// }, { _id: false });

// // تعریف Schema اصلی
// const projectCostSchema = new Schema<ProjectCostDoc>(
//   {
//     projectId: {
//       type: Schema.Types.ObjectId,
//       ref: "Project",
//       required: true,
//       index: true,
//     },
//     materials: [materialSchema],
//     equipment: [equipmentSchema],
//     employees: [employeeSchema],
//     costDate: { type: Date, required: true },
//     totalCost: { type: Number, required: true },
//   },
//   {
//     timestamps: true, // برای افزودن createdAt و updatedAt
//   }
// );

// const ProjectCostModel = generateSchema<ProjectCostDoc>("ProjectCost", projectCostSchema);
// export default ProjectCostModel;
 
  