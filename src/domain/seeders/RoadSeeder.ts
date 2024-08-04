import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import RoadModel from "../models/RoadModel";

export class RoadSeeder {
  
  static removeAllRoads = async () => {
    try {
      await RoadModel.deleteMany({});
      logger.info("All roads removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove roads: " + error.message);
    }
  };

  static insertRoads = async (batchSize = 10) => {
    try {
      const roads = [];

      for (let i = 0; i < batchSize; i++) {
        roads.push({

        });
      }

      await RoadModel.insertMany(roads);
      logger.info(batchSize + " roads seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed roads: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllRoads();
    await this.insertRoads();
  };
}
