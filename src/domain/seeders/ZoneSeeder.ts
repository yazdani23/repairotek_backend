import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import ZoneModel from "../models/ZoneModel";
import ProvinceModel from "../models/ProvinceModel";


export class ZoneSeeder {
  static removeAllZones = async () => {
    try {
      await ZoneModel.deleteMany({});
      logger.info("All zones removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove zones: " + error.message);
    }
  };

  static insertZones = async (batchSize = 10) => {
    try {
      const provinces = await ProvinceModel.find({});
      if (provinces.length === 0) {
        throw new Error("No provinces found in the database.");
      }

      const zones = [];

      for (let i = 0; i < batchSize; i++) {
        const randomProvince =
          provinces[Math.floor(Math.random() * provinces.length)];

        const coordinates = [];
        for (let j = 0; j < 4; j++) {
          // تولید ۵ نقطه به عنوان مثال
          coordinates.push([
            faker.location.longitude(),
            faker.location.latitude(),
          ]);
        }

        zones.push({
          name: faker.location.city(),
          provinceId: randomProvince._id,
          municipalCode: faker.string.uuid(),
          location: {
            type: "Polygon",
            coordinates: [coordinates], // چند نقطه به عنوان یک Polygon
          },
          description: faker.lorem.paragraph(),
          areaSize: faker.number.int({min:1000, max: 10000}),
          roadCondition: faker.helpers.arrayElement([
            "good",
            "average",
            "poor",
          ]),
          roads: [], // فعلاً خالی می‌ماند
          accessibility: faker.helpers.arrayElement([
            "easy",
            "moderate",
            "difficult",
          ]),
        });
      }

      await ZoneModel.insertMany(zones);
      logger.info(`${batchSize} zones seeded successfully.`);
    } catch (error: any) {
      logger.error(`Failed to seed zones: ${error.message}`);
    }
  };

  static seed = async () => {
    await this.removeAllZones();
    await this.insertZones();
  };
}
