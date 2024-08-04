import Joi from "joi";
import { Service } from "../../interfaces/Service";
import BaseRepository from "../repositories/BaseRepository";

type ResourceData<T> = T;

class BaseService<T> implements Service<T> {
  constructor(
    protected repository: BaseRepository<T>,
    protected validateSchema: Joi.ObjectSchema<any>,
    protected validatePatchSchema: Joi.ObjectSchema<any>
  ) {}

  async create(data: ResourceData<T>): Promise<ResourceData<T>> {
    const validationResult = this.validateSchema.validate(data);

    if (validationResult.error) {
      throw new Error(validationResult.error.message);
    }
    try {
      return await this.repository.create(data);
    } catch (error) {
      throw new Error(`Failed to create: ${error}`);
    }
  }

  async update(
    id: string,
    data: Partial<ResourceData<T>>
  ): Promise<ResourceData<T> | null> {
    try {
       const validationResult = this.validateSchema.validate(data, {
         allowUnknown: true,
       });
      if (validationResult.error) {
        throw new Error(validationResult.error.message);
      }
      const existingData = await this.repository.getById(id);

      if (!existingData) {
        return null; // Record not found
      }
      return await this.repository.update(id, data);
    } catch (error) {
      throw new Error(`Failed to update: ${error}`);
    }
  }
  
  async edit(
    id: string,
    data: Partial<ResourceData<T>>
  ): Promise<ResourceData<T> | null> {
    try {
      const validationResult = this.validatePatchSchema.validate(data);
      if (validationResult.error) {
        throw new Error(validationResult.error.message);
      }
      const existingData = await this.repository.getById(id);

      if (!existingData) {
        return null; // Record not found
      }
      return await this.repository.edit(id, data);
    } catch (error) {
      throw new Error(`Failed to update: ${error}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.repository.delete(id);
    } catch (error) {
      throw new Error(`Failed to delete: ${error}`);
    }
  }

  async getAll(): Promise<ResourceData<T>[]> {
    try {
      return await this.repository.getAll();
    } catch (error) {
      throw new Error(`Failed to get all: ${error}`);
    }
  }

  async getById(id: string): Promise<ResourceData<T> | null> {
    try {
      return await this.repository.getById(id);
    } catch (error) {
      throw new Error(`Failed to get by id: ${error}`);
    }
  }

  async search(searchQuery: string): Promise<ResourceData<T>[]> {
    try {
      // You can implement your search logic here based on the repository capabilities
      // This example assumes a simple search by text
      return await this.repository
        .getAll()
        .then((data: any) =>
          data.filter((item: any) => JSON.stringify(item).includes(searchQuery))
        );
    } catch (error) {
      throw new Error(`Failed to search: ${error}`);
    }
  }

  async filter(filterCriteria: any): Promise<ResourceData<T>[]> {
    try {
      // You can implement your filter logic here based on the repository capabilities
      // This example assumes a simple filter by property
      const filterProperty = Object.keys(filterCriteria)[0];
      const filterValue = filterCriteria[filterProperty];
      return await this.repository.getAll().then(
        (data: any) => filterValue
        //   data.filter((item) => item[filterProperty] === filterValue)
      );
    } catch (error) {
      throw new Error(`Failed to filter: ${error}`);
    }
  }

  async getAllPaginated(
    limit: number,
    page: number,
    sort?: string
  ): Promise<{ data: ResourceData<T>[]; total: number }> {
    try {
      // You can implement your pagination logic here based on the repository capabilities
      // This example assumes a simple pagination without sorting
      const skip = (page - 1) * limit;
      const data = await this.repository.getAll();
      const total = data.length;
      return { data: data.slice(skip, skip + limit), total };
    } catch (error) {
      throw new Error(`Failed to get all paginated: ${error}`);
    }
  }
}

export default BaseService;
