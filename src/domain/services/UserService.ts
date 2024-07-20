import { UserDoc } from "../docs/User";
import BaseService from "./BaseService";
import UserRepository from "../repositories/UserRepository";
import {UserPatchValidationSchema, UserValidationSchema} from "../validations/UserValidation";

class UserService extends BaseService<UserDoc> {
  constructor() {
    super(UserRepository, UserValidationSchema, UserPatchValidationSchema);
  }
  // updateUserActivity = async (id: string): Promise<void> => {
  //   await UserRepository.findByIdAndUpdate(id, { lastActivity: Date.now() });
  // };

  // getOnlineUsers = async (): Promise<UserDoc[]> => {
  //   const threshold = Date.now() - 60000; // 60 ثانیه پیش
  //   return await UserRepository.find({ lastActivity: { $gt: threshold } });
  // };
}

export default new UserService();
