import express from "express";
// //todo: remove
// const { index, route404 } = require("../controllers/indexController");
//
import authRouter from "./authRouter";
import userRouter from "./userRouter";
import projectRouter from "./projectRouter";
import employeeRouter from "./employeeRouter";
import equipmentRouter from "./equipmentRouter";
import roleRouter from "./roleRouter";
import provinceRouter from "./provinceRouter";
import zoneRouter from "./zoneRouter";
// import userZoneRouter from "./userZoneRouter";
import permissionRouter from "./permissionRouter";
import galleryRouter from "./galleryRouter";
import adminRouter from "./adminRouter";
import projectGallerySubjectRouter from "./projectGallerySubjectRouter";
import resourceRouter from "./resourceRouter";
import IndexController from "../controllers/IndexController";
import materialRouter from "./materialRouter";
import roadRouter from "./roadRouter";
const indexRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Index
 *   description: Main router including all sub-routers
 */

indexRouter.use(authRouter);
indexRouter.use(adminRouter);
indexRouter.use(materialRouter);
indexRouter.use(userRouter);
indexRouter.use(projectRouter);
indexRouter.use(employeeRouter);
indexRouter.use(equipmentRouter);
indexRouter.use(provinceRouter);
indexRouter.use(roleRouter);
// indexRouter.use(roadRouter)
indexRouter.use(zoneRouter);
indexRouter.use(galleryRouter);
indexRouter.use(projectGallerySubjectRouter);
// indexRouter.use(userZoneRouter); // Uncomment and provide relevant details if needed
indexRouter.use(resourceRouter);
indexRouter.use(permissionRouter);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Home page
 *     tags: [Index]
 *     operationId: getHomePage
 *     responses:
 *       200:
 *         description: Welcome message or application landing page
 *       500:
 *         description: Server error
 */
indexRouter.get("/", IndexController.index);

/**
 * @swagger
 * /*:
 *   all:
 *     summary: Route not found
 *     tags: [Index]
 *     operationId: route404
 *     responses:
 *       404:
 *         description: Route not found
 *       500:
 *         description: Server error
 */
indexRouter.use("*", IndexController.route404);

export default indexRouter;

// const verifyToken =require('../middlewares/jwt')
// const upload = require("../middlewares/multer")
// const multer = require("multer");
// const path = require("path");
// router.post("projects/uploadImage", uploadImageProduct);
