import {
    Model,
  Schema,
  SchemaDefinition,
  SchemaDefinitionType,
  model,
} from "mongoose";

const toJsonSchema = <T>(
  schema: Schema<T>,
  deletedProperties: string[] = ["__v", "_id"]//defualt value
) => {
  schema.set("toJSON", {
    transform: (doc, ret) => {
     if (!ret._id) {
       return ret;
     }
      ret.id = ret._id.toString();
      deletedProperties.forEach((item) => delete ret[item]);
      return ret;
    },
  });

  return schema;
};

const generateSchema = <T>(
  modelName: string,
  schemaDefinition: SchemaDefinition<SchemaDefinitionType<T>, T>
): Model<T> => {  
  const schema = new Schema<T>(schemaDefinition, { timestamps: true });
  toJsonSchema(schema);

  try {
    return model<T>(modelName, schema);
  } catch (error) {
    console.error(`Error creating model ${modelName}:`, error);
    throw error; // Re-throw to propagate the error
  }
};

export { generateSchema, toJsonSchema };
