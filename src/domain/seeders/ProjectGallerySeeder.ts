import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import ProjectGalleryModel from "../models/ProjectGalleryModel";
import ProjectModel from "../models/ProjectModel";
import UserModel from "../models/UserModel";
import ProjectGallerySubjectModel from "../models/ProjectGallerySubjectModel";
import AdminModel from "../models/AdminModel";
import EmployeeModel from "../models/EmployeeModel";

export class ProjectGallerySeeder {
  static removeAllProjectGalleries = async () => {
    try {
      await ProjectGalleryModel.deleteMany({});
      logger.info("All project galleries removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove project galleries: " + error.message);
    }
  };

  static fetchProjectsAndUsers = async () => {
    try {
      const projects = await ProjectModel.find({});
      const employees = await EmployeeModel.find({});
      const admin = await AdminModel.findOne({});
      const subjects = await ProjectGallerySubjectModel.find({});
      console.log(subjects);
      
      const initialMediaSubject = await ProjectGallerySubjectModel.findOne({
        title: "Initialed Project",
      });
      return { projects, employees, admin, subjects, initialMediaSubject };
    } catch (error: any) {
      logger.error(
        "Failed to fetch projects, employees, or subjects: " + error.message
      );
      throw error;
    }
  };

  static insertInitialProjectGalleries = async (
    projects: any[],
    admin: any,
    initialMediaSubject: any
  ) => {
    const initialProjectGalleries = [];
    for (const project of projects) {
      for (let i = 0; i < 5; i++) {
        initialProjectGalleries.push({
          projectId: project.id,
          userId: admin.id,
          mediaName: faker.system.fileName(),
          mediaUrl: faker.image.urlPlaceholder({
            width: 300,
            height: 350,
            backgroundColor: "ffb938",
            textColor: "FFFFFF",
            format: "png",
            text: "Initialed Project",
          }),
          thumbnailMediaUrl: faker.image.urlPlaceholder({
            width: 100,
            height: 115,
            backgroundColor: "ffb938",
            textColor: "FFFFFF",
            format: "png",
            text: "Initialed Project",
          }),
          mediaDateTime: faker.date.past().toISOString(),
          mediaSubjectId: initialMediaSubject.id,
          location: faker.location.streetAddress(),
          description: faker.lorem.paragraph(),
        });
      }
    }
    await ProjectGalleryModel.insertMany(initialProjectGalleries);
    logger.info(
      `Initial project galleries for all projects seeded successfully.`
    );
  };

  static insertRandomProjectGalleries = async (
    batchSize: number,
    projects: any[],
    employees: any[],
    subjects: any[]
  ) => {
    const randomProjectGalleries = [];
    for (let i = 0; i < projects.length; i++) {
      for (let j = 0; j < batchSize; j++) {
        const randomUser =
          employees[Math.floor(Math.random() * employees.length)];
        const randomSubject =
          subjects[Math.floor(Math.random() * subjects.length)];

        randomProjectGalleries.push({
          projectId: projects[i].id,
          userId: randomUser.id,
          mediaName: faker.system.fileName(),
          mediaUrl: faker.image.urlPlaceholder({
            width: 300,
            height: 350,
            backgroundColor: "ffb938",
            textColor: "FFFFFF",
            format: "png",
            text: randomSubject.title,
          }),
          thumbnailMediaUrl: faker.image.urlPlaceholder({
            width: 100,
            height: 115,
            backgroundColor: "ffb938",
            textColor: "FFFFFF",
            format: "png",
            text: "Initialed Project",
          }),
          mediaDateTime: faker.date.past().toISOString(),
          mediaSubjectId: randomSubject.id,
          location: faker.location.streetAddress(),
          description: faker.lorem.paragraph(),
        });
      }
    }
    await ProjectGalleryModel.insertMany(randomProjectGalleries);
    logger.info(
      `${randomProjectGalleries.length} random project galleries seeded successfully.`
    );
  };

  static seed = async (batchSize = 10) => {
    await this.removeAllProjectGalleries();
    const { projects, employees, admin, subjects, initialMediaSubject } =
      await this.fetchProjectsAndUsers();

    // console.log(admin);
    // console.log(users);

    if (!initialMediaSubject) {
      throw new Error("Initialed Project subject not found in the database.");
    }

    await this.insertInitialProjectGalleries(
      projects,
      admin,
      initialMediaSubject
    );
    await this.insertRandomProjectGalleries(
      batchSize,
      projects,
      employees,
      subjects
    );
  };
}
