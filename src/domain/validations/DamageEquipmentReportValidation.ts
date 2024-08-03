import Joi from "joi";

const DamageEquipmentReportValidationSchema = Joi.object({
  title: Joi.string().required(),
  reportSubjectId: Joi.string().required(),
  description: Joi.string().optional().allow(""),
  reportDate: Joi.date().required(),
  reportTime: Joi.string().required(),
  projectGalleryId: Joi.array().items(Joi.string()).required(),
  projectId: Joi.string().required(),
  createdBy: Joi.string().required(),
  equipmentId: Joi.string().required(),
});
const DamageEquipmentReportPatchValidationSchema = Joi.object({
  title: Joi.string().required(),
  reportSubjectId: Joi.string().required(),
  description: Joi.string().optional().allow(""),
  reportDate: Joi.date().required(),
  reportTime: Joi.string().required(),
  projectGalleryId: Joi.array().items(Joi.string()).required(),
  projectId: Joi.string().required(),
  createdBy: Joi.string().required(),
  equipmentId: Joi.string().required(),
});

export {
  DamageEquipmentReportValidationSchema,
  DamageEquipmentReportPatchValidationSchema,
};
