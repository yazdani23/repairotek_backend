import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import BlacklistModel from "../models/TokenBlackListModel";

export class BlacklistSeeder {
  static removeAllBlacklists = async () => {
    try {
      await BlacklistModel.deleteMany({});
      logger.info("All blacklists removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove blacklists: " + error.message);
    }
  };

  static insertBlacklists = async (batchSize = 10) => {
    try {
      const blacklists = [];

      for (let i = 0; i < batchSize; i++) {
        blacklists.push({});
      }

      await BlacklistModel.insertMany(blacklists);
      logger.info(batchSize + " blacklists seeded successfully.");
    } catch (error: any) {
      logger.error("Failed to seed blacklists: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllBlacklists();
    await this.insertBlacklists();
  };
}
