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
    this.userRepository = this.repository as typeof UserRepository;
  }

  async login(email: string, password: string): Promise<string> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = setToken(user);// jwt.sign({ id: user._id, email: user.email }, this.jwtSecret);
    return token;
  }
//  async logout(token: string): Promise<void> {
//     const decoded: any = jwt.decode(token);
//     const expiresIn = decoded.exp - Math.floor(Date.now() / 1000);
//     await BlacklistService.addToBlacklist(token, expiresIn);
//   }


}

export default AuthService;
