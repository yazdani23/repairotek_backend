import fs from "fs";
import swaggerOptions from "../src/config/swagger";
import swaggerJSDoc from "swagger-jsdoc";

const generateSwaggerJson = () => {
  const swaggerSpec = swaggerJSDoc(swaggerOptions);
  fs.writeFileSync(
    "./swagger.json",
    JSON.stringify(swaggerSpec, null, 2),
    "utf-8"
  );
  console.log("swagger.json has been generated!");
};

export default generateSwaggerJson