import Joi from "joi";

const JobValidationSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});
const JobPatchValidationSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export { JobPatchValidationSchema, JobValidationSchema };
