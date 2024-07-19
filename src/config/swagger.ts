import { Options } from "swagger-jsdoc";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Repairotek API Documentation",
      version: "1.0.0",
      description: "API documentation for Repairotek project",
    },
  },
  apis: ["./src/app/routes/*.ts", "./src/domain/models/*.ts"], // فایل‌هایی که شامل کامنت‌های JSDoc هستند

  // apis: [path.join(__dirname, '../docs/swaggerModels.ts')],
};

export default options;
