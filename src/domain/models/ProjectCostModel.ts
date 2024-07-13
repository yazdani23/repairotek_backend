import { Schema } from "mongoose";
import { ProjectCostDoc } from "../docs/ProjectCost";
import { generateModel } from "../../utils/generators/modelGenerator";
/**
 * @swagger
 * components:
 *   schemas:
 *   ProjectCost:
 *     type: object
 *     required:
 *       - projectId
 *       - materials
 *       - equipment
 *       - employees
 *       - costDate
 *       - totalCost
 *     properties:
 *       projectId:
 *         type: string
 *         format: ObjectId
 *         description: ID of the project
 *       materials:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             materialId:
 *               type: string
 *               format: ObjectId
 *               description: ID of the material
 *             value:
 *               type: number
 *               description: Value of the material
 *             costPerUnit:
 *               type: number
 *               description: Cost per unit of the material
 *       equipment:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             equipmentId:
 *               type: string
 *               format: ObjectId
 *               description: ID of the equipment
 *             countHour:
 *               type: number
 *               description: Number of hours the equipment is used
 *             costPerHour:
 *               type: number
 *               description: Cost per hour of using the equipment
 *       employees:
 *         type: array
 *         items:
 *           type: object
 *           properties:
 *             employeeId:
 *               type: string
 *               format: ObjectId
 *               description: ID of the employee
 *             countHour:
 *               type: number
 *               description: Number of hours the employee worked
 *             costPerHour:
 *               type: number
 *               description: Cost per hour of the employee
 *       costDate:
 *         type: string
 *         format: date
 *         description: Date when the cost was recorded
 *       totalCost:
 *         type: number
 *         description: Total cost of the project
 */

const ProjectCostModel = generateModel<ProjectCostDoc>("ProjectCost", {
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

// const ProjectCostModel = generateModel<ProjectCostDoc>("ProjectCost", projectCostSchema);
// export default ProjectCostModel;
