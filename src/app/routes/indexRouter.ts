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
import cameraRouter from "./cameraRouter";
import zoneRouter from "./zoneRouter";
import UserZoneRouter from "./userZoneRouter";

const indexRouter = express.Router();
// const { index, notFound } = require("../controllers/indexController");



indexRouter.use(authRouter);
indexRouter.use(userRouter);
indexRouter.use(projectRouter);
indexRouter.use(employeeRouter);
indexRouter.use(equipmentRouter); 
indexRouter.use(provinceRouter);
indexRouter.use(roleRouter);
indexRouter.use(cameraRouter);
indexRouter.use(zoneRouter);
indexRouter.use(UserZoneRouter);
// indexRouter.use("*", notFound);
//todo remove
// indexRouter.get("/", index);

export default indexRouter;


// const verifyToken =require('../middlewares/jwt')
// const upload = require("../middlewares/multer")
// const multer = require("multer");
// const path = require("path");
// router.post("projects/uploadImage", uploadImageProduct);











