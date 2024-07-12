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
import materialRouter from "./materialRouter";
import projectGallerySubjectRouter from "./projectGallerySubjectRouter";
import resourceRouter from "./resourceRouter";
import IndexController from "../controllers/IndexController";
const indexRouter = express.Router();

indexRouter.use(authRouter);
indexRouter.use(adminRouter);
indexRouter.use(materialRouter);
indexRouter.use(userRouter);
indexRouter.use(projectRouter);
indexRouter.use(employeeRouter);
indexRouter.use(equipmentRouter);
indexRouter.use(provinceRouter);
indexRouter.use(roleRouter);
indexRouter.use(zoneRouter);
indexRouter.use(galleryRouter);
indexRouter.use(projectGallerySubjectRouter);

// indexRouter.use(userZoneRouter);
indexRouter.use(resourceRouter);
indexRouter.use(permissionRouter);
indexRouter.get("/", IndexController.index);
indexRouter.use("*", IndexController.route404);
//todo remove

export default indexRouter;

// const verifyToken =require('../middlewares/jwt')
// const upload = require("../middlewares/multer")
// const multer = require("multer");
// const path = require("path");
// router.post("projects/uploadImage", uploadImageProduct);
