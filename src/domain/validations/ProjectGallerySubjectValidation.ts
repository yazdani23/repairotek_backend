import Joi from "joi";

const ProjectGallerySubjectValidationSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
});
const ProjectGallerySubjectPatchValidationSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
});
export {
  ProjectGallerySubjectPatchValidationSchema,
  ProjectGallerySubjectValidationSchema,
};
