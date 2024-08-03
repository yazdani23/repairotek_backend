import Joi from "joi";

const DailyReportValidationSchema = Joi.object({
  id: Joi.string().optional(),
  createdAt: Joi.date().iso().optional(),
  updatedAt: Joi.date().iso().optional(),
  title: Joi.string().required(),
  reportSubjectId: Joi.string().required(),
  description: Joi.string().optional().allow(""),
  reportDate: Joi.date().required(),
  reportTime: Joi.string().required(),
  projectGalleryId: Joi.array().items(Joi.string()).required(),
  projectId: Joi.string().required(),
  createdBy: Joi.string().required(),
});
const DailyReportPatchValidationSchema = Joi.object({
  id: Joi.string().optional(),
  createdAt: Joi.date().iso().optional(),
  updatedAt: Joi.date().iso().optional(),
  title: Joi.string().required(),
  reportSubjectId: Joi.string().required(),
  description: Joi.string().optional().allow(""),
  reportDate: Joi.date().required(),
  reportTime: Joi.string().required(),
  projectGalleryId: Joi.array().items(Joi.string()).required(),
  projectId: Joi.string().required(),
  createdBy: Joi.string().required(),
});

export { DailyReportValidationSchema, DailyReportPatchValidationSchema };
