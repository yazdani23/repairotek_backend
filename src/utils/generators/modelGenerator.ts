import {
  Model,
  Schema,
  SchemaDefinition,
  SchemaDefinitionType,
  model,
} from "mongoose";

const toJsonSchema = <T>(schema: Schema<T>, deletedProperties?: string[]) => {
  const deletedProp = ["__v", "_id", ...(deletedProperties ?? [])];
  schema.set("toJSON", {
    transform: (doc, ret) => {
      if (!ret._id) {
        return ret;
      }
      ret.id = ret._id.toString();
      deletedProp.forEach((item) => delete ret[item]);
      return ret;
    },
  });

  return schema;
};

const generateModel = <T>(
  modelName: string,
  schemaDefinition: SchemaDefinition<SchemaDefinitionType<T>, T>,
  deletedProperties?: string[],
  baseModel?: Model<any> // پارامتر اختیاری برای مدل پایه
): Model<T> => {
  const schema = new Schema<T>(schemaDefinition, { timestamps: true });
  toJsonSchema(schema, deletedProperties);

  try {
    if (baseModel) {
      // در صورت وجود مدل پایه، یک discriminator ایجاد می‌کند
      return baseModel.discriminator<T>(modelName, schema);
    } else {
      // در غیر این صورت، یک مدل جدید ایجاد می‌کند
      return model<T>(modelName, schema);
    }
  } catch (error) {
    console.error(`Error creating model ${modelName}:`, error);
    throw error; // Re-throw to propagate the error
  }
};

export { generateModel, toJsonSchema };
