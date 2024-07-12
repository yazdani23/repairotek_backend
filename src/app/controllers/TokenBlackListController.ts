import { TokenBlackListDoc } from "../../domain/docs/TokenBlackList";
import TokenBlackListService from "../../domain/services/TokenBlackListService";
import BaseController from "./BaseController";

class TokenBlackListController extends BaseController<TokenBlackListDoc> {
  private tokenBlackListService = this.service as typeof TokenBlackListService;
  constructor() {
    super(TokenBlackListService);
  }
}
export default new TokenBlackListController();
