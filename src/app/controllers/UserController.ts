import { NextFunction, Request, Response } from "express";
import UserService from "../../domain/services/UserService";
import BaseController from "./BaseController";
import { UserDoc } from "../../domain/docs/User";

// const UserController = crudControllerGenerator("User", UserService);
class UserController extends BaseController<UserDoc> {
  private userService = this.service as typeof UserService;
  constructor() {
    super(UserService);
  }

  getUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      if (!req.user) {
        throw new Error("User not authenticated");
      }
      const { id } = req.user;
      console.log(id);
      console.log(req.user);
      
      
      const user = await this.userService.getById(id);
      console.log(user);
      
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error: any) {
      next(error);
    }
  }

  getOnlineUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
      const onlineUsers: UserDoc[] = [];
      const sessions: any = req.sessionStore.all;
      // console.log(sessions);

      for (const sessionId in sessions) {
        if (sessions.hasOwnProperty(sessionId)) {
          const sessionData = JSON.parse(sessions[sessionId]);
          if (sessionData && sessionData.user) {
            const user: UserDoc | null = await UserService.getById(
              sessionData.user.id
            );
            if (user) {
              onlineUsers.push(user);
            }
          }
        }
      }
      return res.status(200).json(onlineUsers);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  };

  // getOnlineUsers = async (req: Request, res: Response) => {
  //   const currentTime = Date.now();
  //   const onlineThreshold = 5 * 60 * 1000; // 5 minutes

  //   const onlineUsers = await this.userService.find({
  //     lastActivity: { $gte: currentTime - onlineThreshold },
  //   });

  //   return res.status(200).json(onlineUsers);
  // };
}
export default new UserController();
