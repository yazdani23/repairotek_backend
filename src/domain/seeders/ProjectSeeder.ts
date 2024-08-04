import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import ProjectModel from "../models/ProjectModel";
import AdminModel from "../models/AdminModel";
import ZoneModel from "../models/ZoneModel";
import MaterialModel from "../models/MaterialModel";
import EquipmentModel from "../models/EquipmentModel";
import EmployeeModel from "../models/EmployeeModel";
import { UnitsProjectArea } from "../../utils/constant/UnitsProjectArea";
import { StatusProject } from "../../utils/constant/StatusProject";
import { generateCode } from "../../utils/functions/generateCode";
export class ProjectSeeder {
  static removeAllProjects = async () => {
    try {
      await ProjectModel.deleteMany({});
      logger.info("All projects removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove projects: " + error.message);
    }
  };

  static insertProjects = async (batchSize = 10) => {
    try {
      const admin = await AdminModel.findOne({});

      if (!admin) throw new Error("No admin found in the database.");

      const zones = await ZoneModel.find({});
      const materials = await MaterialModel.find({});
      const equipment = await EquipmentModel.find({});
      const employees = await EmployeeModel.find({});

      if (
        zones.length === 0 ||
        materials.length === 0 ||
        equipment.length === 0 ||
        employees.length === 0
      )
        throw new Error("No required data found in the database.");

      const projects = [];

      for (let i = 0; i < batchSize; i++) {
        const randomZone = zones[Math.floor(Math.random() * zones.length)];
        const randomNumber = Math.floor(Math.random() * (7 - 3 + 1)) + 3;
        const employeeList = [];
        const equipmentList = [];
        const materialsList = [];
        for (let j = 0; j < randomNumber; j++) {
          const randomMaterial = faker.helpers.arrayElement(materials);
          const randomEquipment = faker.helpers.arrayElement(equipment);
          const randomEmployee:any = faker.helpers.arrayElement(employees); // Cast randomEmployee to EmployeeModel type

          employeeList.push(randomEmployee.id);
          materialsList.push(randomMaterial.id);
          equipmentList.push(randomEquipment.id);
        }

        projects.push({
          projectCode: generateCode("PRJ"),
          adminId: admin.id,
          title: faker.lorem.words(3),
          zoneId: randomZone.id,
          areaLength: faker.number.float({ min: 1, max: 1000 }),
          areaWidth: faker.number.float({ min: 1, max: 1000 }),
          areaHeight: faker.number.float({ min: 1, max: 1000 }),
          measureUnit: faker.helpers.arrayElement(UnitsProjectArea),
          description: faker.lorem.paragraph(),
          longitude: faker.location.longitude(),
          latitude: faker.location.latitude(),
          status: faker.helpers.arrayElement(StatusProject),
          materials: materialsList,
          equipment: equipmentList,
          employees: employeeList,
        });
      }

      await ProjectModel.insertMany(projects);
      logger.info(`${batchSize} projects seeded successfully.`);
    } catch (error: any) {
      logger.error(`Failed to seed projects: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllProjects();
    await this.insertProjects();
  };
}
