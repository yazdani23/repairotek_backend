import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import AssetsModel from "../models/AssetsModel";
import MaterialModel from "../models/MaterialModel";
import EquipmentModel from "../models/EquipmentModel";

export class AssetsSeeder {
  static removeAllAssets = async () => {
    try {
      await AssetsModel.deleteMany({});
      logger.info("All assets removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove assets: " + error.message);
    }
  };

  static insertAssets = async () => {
    try {
      const materials = await MaterialModel.find({});
      const equipment = await EquipmentModel.find({});
      const assets = [];

      for (let i = 0; i < 10; i++) {
        const materialIndex = Math.floor(Math.random() * materials.length);
        const equipmentIndex = Math.floor(Math.random() * equipment.length);

        assets.push({
          materials: {
            materialId: materials[materialIndex].id,
            value: Math.random() * 100,
            costPerUnit: Math.random() * 10,
          },
          equipment: {
            equipmentId: equipment[equipmentIndex].id,
            countHour: Math.floor(Math.random() * 100),
            costPerHour: Math.random() * 50,
          },
        });
      }

      // Insert assets into the database
      await AssetsModel.insertMany(assets);
      logger.info(`${assets.length} assets seeded successfully.`);
    } catch (error: any) {
      logger.error("Failed to seed assets: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllAssets();
    await this.insertAssets();
  };
}
