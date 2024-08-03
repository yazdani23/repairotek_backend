import Joi from "joi";

const InjuryEmployeeReportValidationSchema = Joi.object({
  title: Joi.string().required(),
  reportSubjectId: Joi.string().hex().length(24).required(),
  description: Joi.string().default(""),
  reportDate: Joi.date().required(),
  reportTime: Joi.string().required(),
  projectGalleryId: Joi.array().items(Joi.string().hex().length(24)).optional(),
  projectId: Joi.string().hex().length(24).required(),
  createdBy: Joi.string().hex().length(24).required(),
  employeeId: Joi.string().hex().length(24).required(),
});
const InjuryEmployeeReportPatchValidationSchema = Joi.object({
  title: Joi.string().required(),
  reportSubjectId: Joi.string().hex().length(24).required(),
  description: Joi.string().default(""),
  reportDate: Joi.date().required(),
  reportTime: Joi.string().required(),
  projectGalleryId: Joi.array().items(Joi.string().hex().length(24)).optional(),
  projectId: Joi.string().hex().length(24).required(),
  createdBy: Joi.string().hex().length(24).required(),
  employeeId: Joi.string().hex().length(24).required(),
});

export {
  InjuryEmployeeReportValidationSchema,
  InjuryEmployeeReportPatchValidationSchema,
};
