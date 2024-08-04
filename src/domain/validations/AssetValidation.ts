import Joi from "joi";

const assetMaterialSchema = Joi.object({
  materialId: Joi.string().required(),
  value: Joi.number().required(),
  costPerUnit: Joi.number().optional(),
});

// Schema for AssetEquipment
const assetEquipmentSchema = Joi.object({
  equipmentId: Joi.string().required(),
  countHour: Joi.number().required(),
  costPerHour: Joi.number().optional(),
});

const AssetValidationSchema = Joi.object({
  materials: Joi.array().items(assetMaterialSchema).optional(),
  equipment: Joi.array().items(assetEquipmentSchema).optional(),
});
const AssetPatchValidationSchema = Joi.object({
  materials: Joi.array().items(assetMaterialSchema).optional(),
  equipment: Joi.array().items(assetEquipmentSchema).optional(),
});

export { AssetPatchValidationSchema, AssetValidationSchema };
