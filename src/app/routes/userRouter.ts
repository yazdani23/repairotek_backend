import express from "express";
import UserController from "../controllers/UserController";
import {isLogined} from "../middlewares/authMiddleware";

const userRouter = express.Router();

// Define routes for handling CRUD operations on users
userRouter.get("/users", UserController.getAll);
userRouter.get("/users/:id", UserController.getById);
userRouter.post("/users", UserController.create);
userRouter.get("/online-users", UserController.getOnlineUsers);

// Route for updating a user. Assuming validationMiddleware is used to validate the data being sent.
userRouter.put(
  "/users/:id",
  UserController.update
);

// Route for deleting a user
userRouter.delete("/users/:id", UserController.delete);

export default userRouter;
