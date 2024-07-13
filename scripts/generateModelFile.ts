import * as fs from "fs/promises";
import * as path from "path";
import { MODELS_PATH, doesFileExist } from "./utils";

export const generateModelFile = async (
  resourceNameUC: string
): Promise<void> => {
  const modelPath = path.join(MODELS_PATH, `${resourceNameUC}Model.ts`);

  if (await doesFileExist(modelPath)) {
    console.error(`${resourceNameUC}Model already exists at: ${modelPath}`);
    return;
  }

  const modelContent = `
import { ${resourceNameUC}Doc } from "../docs/${resourceNameUC}";
import { generateModel } from "../../utils/generators/modelGenerator";

const ${resourceNameUC}Model = generateModel<${resourceNameUC}Doc>("${resourceNameUC}", {

});

export default ${resourceNameUC}Model;

`;

  try {
    await fs.writeFile(modelPath, modelContent);
    console.log(`${resourceNameUC}Model created at: ${modelPath}`);
  } catch (error) {
    console.error("Error creating Model:", error);
  }
};
