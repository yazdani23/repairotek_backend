import { TokenBlackListDoc } from "../docs/TokenBlackList";
import BaseService from "./BaseService";
import TokenBlackListRepository from "../repositories/TokenBlackListRepository";
import TokenBlackListValidationSchema from "../validations/TokenBlackListValidation";

type ResourceData<T> = T;
class TokenBlackListService extends BaseService<TokenBlackListDoc> {
  private tokenBlackListRepository = this.repository as typeof TokenBlackListRepository;
  constructor() {
    super(TokenBlackListRepository, TokenBlackListValidationSchema);
  }

  // create(data: TokenBlackListDoc): Promise<TokenBlackListDoc> {
  //   throw new Error("Method not implemented.");
  // }
  // async update(
  //   id: string,
  //   data: Partial<ResourceData<TokenBlackListDoc>>
  // ): Promise<ResourceData<TokenBlackListDoc> | null> {
  //     throw new Error("Method not implemented.");
  // }

  //  async delete(id: string): Promise<void> {
  //   throw new Error("Method not implemented.");
  //  }

  // async getAll(): Promise<ResourceData<TokenBlackListDoc>[]> {
  //   throw new Error("Method not implemented.");
  // }
  // async getById(id: string): Promise<ResourceData<TokenBlackListDoc> | null> {
  //   throw new Error("Method not implemented.");
  // }
  // search(searchQuery: string): Promise<ResourceData<TokenBlackListDoc>[]> {
  //   throw new Error("Method not implemented.");
  // }
  // filter(filterCriteria: any): Promise<ResourceData<TokenBlackListDoc>[]> {
  //   throw new Error("Method not implemented.");
  // }

  // getAllPaginated(
  //   limit: number,
  //   page: number,
  //   sort?: string
  // ): Promise<{ data: ResourceData<TokenBlackListDoc>[]; total: number }> {
  //   throw new Error("Method not implemented.");
  // }

  async isBlackToken(token: string): Promise<boolean> {
    const result = await this.tokenBlackListRepository.findByToken(token);
    return result ? true : false;
  }
}
export default new TokenBlackListService();
