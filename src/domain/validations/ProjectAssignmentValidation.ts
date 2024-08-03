import Joi from "joi";

const ProjectAssignmentValidationSchema = Joi.object({
  projectId: Joi.string().required(),
  employees: Joi.array().items(
    Joi.object({
      employeeId: Joi.string().required(),
      estimatedCountHour: Joi.number(),
    }),
  ),
  equipment: Joi.array().items(
    Joi.object({
      equipmentId: Joi.string().required(),
      estimatedCountHour: Joi.number(),
    }),
  ),
  materials: Joi.array().items(
    Joi.object({
      materialId: Joi.string().required(),
      estimatedValue: Joi.number(),
    }),
  ),
  description: Joi.string(),
  totalEstimatedCountDays: Joi.number(),
});
const ProjectAssignmentPatchValidationSchema = Joi.object({
  projectId: Joi.string().required(),
  employees: Joi.array().items(
    Joi.object({
      employeeId: Joi.string().required(),
      estimatedCountHour: Joi.number(),
    }),
  ),
  equipment: Joi.array().items(
    Joi.object({
      equipmentId: Joi.string().required(),
      estimatedCountHour: Joi.number(),
    }),
  ),
  materials: Joi.array().items(
    Joi.object({
      materialId: Joi.string().required(),
      estimatedValue: Joi.number(),
    }),
  ),
  description: Joi.string(),
  totalEstimatedCountDays: Joi.number(),
});

export {
  ProjectAssignmentPatchValidationSchema,
  ProjectAssignmentValidationSchema,
};
