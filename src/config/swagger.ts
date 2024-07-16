import path from 'path';
import { Options } from 'swagger-jsdoc';

const isProduction = process.env.ENV_MODE === "production";

const options: Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Repairotek API Documentation",
      version: "1.0.0",
      description: "API documentation for Repairotek project",
    },
    servers: [
      {
        url: "/api/v1",
        description: "Base URL",
      },
    ],
  },
  apis: isProduction
    ? [
        path.resolve(__dirname, "../app/routes/*.js"),
        path.resolve(__dirname, "../domain/models/*.js"),
      ]
    : [
        path.resolve(__dirname, "../app/routes/*.ts"),
        path.resolve(__dirname, "../domain/models/*.ts"),
      ],
};

export default options;





// const options: Options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Repairotek API Documentation",
//       version: "1.0.0",
//       description: "API documentation for Repairotek project",
//     },
//   },
//   apis: isProduction
//     ? [
//         path.resolve(__dirname, "../../dist/app/routes/*.js"),
//         path.resolve(__dirname, "../../dist/domain/models/*.js"),
//       ]
//     : [
//         path.resolve(__dirname, "../app/routes/*.ts"),
//         path.resolve(__dirname, "../domain/models/*.ts"),
//       ],
// };

// export default options;
