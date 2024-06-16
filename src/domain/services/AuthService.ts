// auth.service.ts
import bcrypt from "bcrypt";
import { UserDoc } from "../docs/User";
import BaseService from "./BaseService";
import UserValidationSchema from "../validations/UserValidation";
import UserRepository from "../repositories/UserRepository";
import {setToken}  from "../../utils/functions/setToken";

class AuthService extends BaseService<UserDoc> {
  private userRepository = this.repository as typeof UserRepository;
  constructor() {
    super(UserRepository, UserValidationSchema);
  }

  async login(
    email: string,
    password: string
  ): Promise<{ accessToken: string; refreshToken: string }> {
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

    return { accessToken, refreshToken };
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
