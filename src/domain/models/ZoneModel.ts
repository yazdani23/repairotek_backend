import { Schema } from "mongoose";
import { ZoneDoc } from "../docs/Zone";
import { generateModel } from "../../utils/generators/modelGenerator";

/**
 * @swagger
 * components:
 *   schemas:
 *     Zone:
 *       type: object
 *       required:
 *         - name
 *         - roadWay
 *         - location
 *         - provinceId
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the zone
 *           example: "Downtown"
 *         roadWay:
 *           type: object
 *           required:
 *             - name
 *             - status
 *           properties:
 *             name:
 *               type: string
 *               description: The name of the roadway
 *               example: "Main Street"
 *             status:
 *               type: string
 *               description: The status of the roadway
 *               enum: [good, average, poor]
 *               example: "good"
 *             traffic:
 *               type: string
 *               description: The traffic level of the roadway
 *               enum: [low, medium, high]
 *               example: "medium"
 *         location:
 *           type: object
 *           required:
 *             - type
 *             - coordinates
 *           properties:
 *             type:
 *               type: string
 *               description: The type of the location
 *               example: "Point"
 *             coordinates:
 *               type: array
 *               items:
 *                 type: number
 *               description: The coordinates of the location [longitude, latitude]
 *               example: [40.7128, -74.0060]
 *         description:
 *           type: string
 *           description: A description of the zone
 *           example: "This is a busy downtown area with high traffic."
 *         provinceId:
 *           type: string
 *           description: The ID of the province
 *           example: "60d0fe4f5311236168a109ca"
 */

/**
 * Zone schema definition
 */
const ZoneModel = generateModel<ZoneDoc>("Zone", {
  name: { type: String, required: true },
  location: {
    type: new Schema({
      type: { type: String, default: "Point" },
      coordinates: { type: [Number], required: true },
    }),
    required: true,
  },
  description: { type: String },
  provinceId: { type: Schema.Types.ObjectId, ref: "Province", required: true },
});

export default ZoneModel;


  // roadWay: {
  //   type: new Schema({
  //     name: { type: String, required: true },
  //     status: {
  //       type: String,
  //       enum: ["good", "average", "poor"],
  //       required: true,
  //     },
  //     traffic: { type: String, enum: ["low", "medium", "high"] },
  //   }),
  //   required: true,
  // },