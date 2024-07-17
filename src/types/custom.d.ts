import { UserDoc } from "../domain/docs/User";

declare global {
  namespace Express {
    interface Request {
      user?: UserDoc;
    }
  }
}
