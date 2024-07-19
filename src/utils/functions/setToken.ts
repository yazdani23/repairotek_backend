import jwt from "jsonwebtoken";
import { UserDoc } from "../../domain/docs/User";

const setToken = (user: UserDoc, expiresIn: string): string => {
  const payload = {
    id: user.id,
    email: user.email,
    roleId: user.roleId,
  };

  const SECRET_KEY = process.env.SECRET_KEY || "secret key";
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn });

  return token;
};

export { setToken };
