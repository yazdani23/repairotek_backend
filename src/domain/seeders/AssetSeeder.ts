import { faker } from "@faker-js/faker";
import logger from "../../utils/helpers/logger";
import AssetModel from "../models/AssetModel";
import MaterialModel from "../models/MaterialModel";
import EquipmentModel from "../models/EquipmentModel";

export class AssetSeeder {
  static removeAllasset = async () => {
    try {
      await AssetModel.deleteMany({});
      logger.info("All asset removed successfully.");
    } catch (error: any) {
      logger.error("Failed to remove asset: " + error.message);
    }
  };

  static insertasset = async () => {
    try {
      const materials = await MaterialModel.find({});
      const equipment = await EquipmentModel.find({});
      const asset = [];

      for (let i = 0; i < 10; i++) {
        const materialIndex = Math.floor(Math.random() * materials.length);
        const equipmentIndex = Math.floor(Math.random() * equipment.length);

        asset.push({
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

      // Insert asset into the database
      await AssetModel.insertMany(asset);
      logger.info(`${asset.length} asset seeded successfully.`);
    } catch (error: any) {
      logger.error("Failed to seed asset: " + error.message);
    }
  };

  static seed = async () => {
    await this.removeAllasset();
    await this.insertasset();
  };
}
