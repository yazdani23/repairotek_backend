import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
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
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = setToken(user); // jwt.sign({ id: user._id, email: user.email }, this.jwtSecret);
    return token;
  }
   async logout(token: string): Promise<void> {
      const decoded: any = jwt.decode(token);
      const expiresIn = decoded.exp - Math.floor(Date.now() / 1000);
    }

async forgetPassword  (email: string):Promise<string> {
  
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new Error("User not found");
    }
    const token = setToken(user); 
    const resetUrl = this.generateResetUrl(user.id, token); // Implement generateResetUrl

  // Send email with password reset instructions
  const emailContent = this.createPasswordResetEmail(user.email, resetUrl); // Implement createPasswordResetEmail
   
  // Return a success message (optional)
  return 'Password reset instructions have been sent to your email.';
}

 generateResetUrl(userId: number, token: string): string {
  // Implement logic to create a secure URL with user ID and token
  // Example: https://your-app.com/reset-password?userId=${userId}&token=${token}
  // Ensure the URL is properly encoded to handle special characters
  return `https://your-app.com/reset-password?userId=${encodeURIComponent(userId)}&token=${encodeURIComponent(token)}`;
}

 createPasswordResetEmail(userEmail: string, resetUrl: string): string {
  
  const subject = 'Reset Your Password for Your Account';
  const body = `
    Hi ${userEmail},

    You recently requested to reset your password for your account.
    Click the link below to set a new password:

    ${resetUrl}

    This link will expire in [duration, e.g., 24 hours]. If you did not request a password reset, you can safely ignore this email.

    Sincerely,
    The Your App Team
  `;
  return `Subject: ${subject}\n\n${body}`;
}
  }

export default AuthService;
