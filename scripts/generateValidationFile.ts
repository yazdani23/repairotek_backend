import * as fs from "fs/promises";
import * as path from "path";
import { VALIDATIONS_PATH, doesFileExist } from "./utils";

export const generateValidationFile = async (resourceNameUC: string): Promise<void> => {
  const validationPath = path.join(
    VALIDATIONS_PATH,
    `${resourceNameUC}Validation.ts`
  );

  if (await doesFileExist(validationPath)) {
    console.error(
      `${resourceNameUC}Validation already exists at: ${validationPath}`
    );
    return;
  }

  const validationContent = `
import Joi from "joi";

const ${resourceNameUC}ValidationSchema = Joi.object({

});

const ${resourceNameUC}ValidationPatchSchema = Joi.object({

});

export { ${resourceNameUC}ValidationSchema, ${resourceNameUC}ValidationPatchSchema };

`;

  try {
    await fs.writeFile(validationPath, validationContent);
    console.log(`${resourceNameUC}Validation created at: ${validationPath}`);
  } catch (error) {
    console.error("Error creating Validation:", error);
  }
};
