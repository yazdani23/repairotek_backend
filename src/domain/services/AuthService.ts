// auth.service.ts
import bcrypt from "bcrypt";
import { UserDoc, UserInfoDoc } from "../docs/User";
import BaseService from "./BaseService";
import UserValidationSchema from "../validations/UserValidation";
import UserRepository from "../repositories/UserRepository";
import { setToken } from "../../utils/functions/setToken";
import { RoleDoc } from '../docs/Role';

class AuthService extends BaseService<UserDoc> {
  private userRepository = this.repository as typeof UserRepository;
  //TODO:
  // private readonly jwtSecret: string; // Replace with your secure secret key

  constructor() {
    super(UserRepository, UserValidationSchema);
  }

  async login(
    email: string,
    password: string
  ): Promise<{
    accessToken: string;
    refreshToken: string;
    userInfo: UserInfoDoc;
  }> {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const accessToken = setToken(user, "15m"); // توکن دسترسی با مدت اعتبار کوتاه
    const refreshToken = setToken(user, "7d"); // توکن نوسازی با مدت اعتبار طولانی
    const userInfo = {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      profilePhoto:user.profilePhoto,
      role: user.roleId && (user.roleId as RoleDoc).name,
    };
    return { accessToken, refreshToken, userInfo };
  }

  async getByEmail(email: string): Promise<UserDoc | null> {
    return await this.userRepository.findByEmail(email);
  }

  //  async logout(token: string): Promise<void> {
  //     const decoded: any = jwt.decode(token);
  //     const expiresIn = decoded.exp - Math.floor(Date.now() / 1000);
  //     await BlacklistService.addToBlacklist(token, expiresIn);
  //   }
}

export type AuthServiceType = AuthService;
export default new AuthService();
