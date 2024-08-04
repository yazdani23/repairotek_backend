import Joi from "joi";

const ReportSubjectValidationSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
});
const ReportSubjectPatchValidationSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
});

export { ReportSubjectPatchValidationSchema, ReportSubjectValidationSchema };
