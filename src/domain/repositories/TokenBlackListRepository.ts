import { TokenBlackListDoc } from "../docs/TokenBlackList";
import TokenBlackListModel from "../models/TokenBlackListModel";
import BaseRepository from "./BaseRepository";

class TokenBlackListRepository extends BaseRepository<TokenBlackListDoc> {
  constructor() {
    super(TokenBlackListModel);
  }

  async findByToken(token: string): Promise<TokenBlackListDoc | null> {
    return this.model.findOne({ token });
  }
}

export default new TokenBlackListRepository();
