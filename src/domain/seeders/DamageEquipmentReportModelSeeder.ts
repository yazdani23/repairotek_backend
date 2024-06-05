import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import DamageEquipmentReportModel from "../models/DamageEquipmentReportModel";
import ReportSubjectModel from "../models/ReportSubjectModel";
import ProjectGalleryModel from "../models/ProjectGalleryModel";
import ProjectModel from "../models/ProjectModel";
import UserModel from "../models/UserModel";
import EquipmentModel from "../models/EquipmentModel";

export class DamageEquipmentReportSeeder {
  static removeAllDamageEquipmentReports = async () => {
    try {
      await DamageEquipmentReportModel.deleteMany({});
      logger.info("All damage equipment reports removed successfully.");
    } catch (error: any) {
      logger.error(
        `Failed to remove damage equipment reports: ${error.message}`
      );
    }
  };

  static fetchRequiredData = async () => {
    try {
      const reportSubjects = await ReportSubjectModel.find({});
      const projectGalleries = await ProjectGalleryModel.find({});
      const projects = await ProjectModel.find({});
      const users = await UserModel.find({});
      const equipment = await EquipmentModel.find({});

      if (!reportSubjects.length)
        throw new Error("No report subjects found in the database.");
      if (!projectGalleries.length)
        throw new Error("No project galleries found in the database.");
      if (!projects.length)
        throw new Error("No projects found in the database.");
      if (!users.length) throw new Error("No users found in the database.");
      if (!equipment.length)
        throw new Error("No equipment found in the database.");

      return { reportSubjects, projectGalleries, projects, users, equipment };
    } catch (error: any) {
      logger.error(`Failed to fetch required data: ${error.message}`);
      throw error;
    }
  };

  static insertDamageEquipmentReports = async (batchSize = 10) => {
    try {
      const { reportSubjects, projectGalleries, projects, users, equipment } =
        await this.fetchRequiredData();

      const damageEquipmentReports = [];

      for (let i = 0; i < batchSize; i++) {
        const randomReportSubject =
          reportSubjects[Math.floor(Math.random() * reportSubjects.length)];
        const randomProjectGallery =
          projectGalleries[Math.floor(Math.random() * projectGalleries.length)];
        const randomProject =
          projects[Math.floor(Math.random() * projects.length)];
        const randomUser = users[Math.floor(Math.random() * users.length)];
        const randomEquipment =
          equipment[Math.floor(Math.random() * equipment.length)];

        damageEquipmentReports.push({
          title: faker.lorem.words(5),
          reportSubjectId: randomReportSubject.id,
          description: faker.lorem.paragraph(),
          reportDate: faker.date.past(),
          reportTime: faker.date.past().toLocaleTimeString("en-US"),
          projectGalleryId: [randomProjectGallery.id],
          projectId: randomProject.id,
          createdBy: randomUser.id,
          equipmentId: randomEquipment.id,
        });
      }

      await DamageEquipmentReportModel.insertMany(damageEquipmentReports);
      logger.info(
        `${damageEquipmentReports.length} damage equipment reports seeded successfully.`
      );
    } catch (error: any) {
      logger.error(`Failed to seed damage equipment reports: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllDamageEquipmentReports();
    await this.insertDamageEquipmentReports();
  };
}
