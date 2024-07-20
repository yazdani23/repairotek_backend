import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import TestModel from "../models/TestModel";

export class TestSeeder {
  
  static removeAllTests = async () => {
    try {
      await TestModel.deleteMany({});
      logger.info("All tests removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove tests: " + error.message);
    }
  };

  static insertTests = async (batchSize = 10) => {
    try {
      const tests = [];

      for (let i = 0; i < batchSize; i++) {
        tests.push({

        });
      }

      await TestModel.insertMany(tests);
      logger.info(batchSize + " tests seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed tests: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllTests();
    await this.insertTests();
  };
}
