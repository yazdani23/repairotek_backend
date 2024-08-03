import Joi from "joi";

const ProjectCostValidationSchema = Joi.object({
  projectId: Joi.string().required(),
  materials: Joi.array()
    .items(
      Joi.object({
        materialId: Joi.string().required(),
        value: Joi.number().required(),
        costPerUnit: Joi.number().required(),
      }),
    )
    .required(),
  equipment: Joi.array()
    .items(
      Joi.object({
        equipmentId: Joi.string().required(),
        countHour: Joi.number().required(),
        costPerHour: Joi.number().required(),
      }),
    )
    .required(),
  employees: Joi.array()
    .items(
      Joi.object({
        employeeId: Joi.string().required(),
        countHour: Joi.number().required(),
        costPerHour: Joi.number().required(),
      }),
    )
    .required(),
  costDate: Joi.date().required(),
  totalCost: Joi.number().required(),
});
const ProjectCostPatchValidationSchema = Joi.object({
  projectId: Joi.string().required(),
  materials: Joi.array()
    .items(
      Joi.object({
        materialId: Joi.string().required(),
        value: Joi.number().required(),
        costPerUnit: Joi.number().required(),
      }),
    )
    .required(),
  equipment: Joi.array()
    .items(
      Joi.object({
        equipmentId: Joi.string().required(),
        countHour: Joi.number().required(),
        costPerHour: Joi.number().required(),
      }),
    )
    .required(),
  employees: Joi.array()
    .items(
      Joi.object({
        employeeId: Joi.string().required(),
        countHour: Joi.number().required(),
        costPerHour: Joi.number().required(),
      }),
    )
    .required(),
  costDate: Joi.date().required(),
  totalCost: Joi.number().required(),
});

export { ProjectCostPatchValidationSchema, ProjectCostValidationSchema };
