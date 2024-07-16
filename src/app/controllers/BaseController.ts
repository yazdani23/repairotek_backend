import { Request, Response, NextFunction } from "express";
import { Controller } from "../../interfaces/Controller";
import BaseService from "../../domain/services/BaseService";

type ResourceData<T> = T;

class BaseController<T> implements Controller<T>{
  constructor(protected service: BaseService<T>) {}

  getAll = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const resources = await this.service.getAll();
      return res.status(200).json(resources);
    } catch (error) {
      next(error);
    }
  };

  getById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const id = req.params.id;
      const resource = await this.service.getById(id);
      if (!resource) {
        return res
          .status(404)
          .json({ error: `Resource not found with id ${id}` });
      }
      return res.status(200).json(resource);
    } catch (error) {
      next(error);
    }
  };

  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const createData = req.body as ResourceData<T>;
      const createdResource = await this.service.create(createData);
      return res.status(201).json(createdResource);
    } catch (error) {
      next(error);
    }
  };

  search = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const searchQuery = req.params.query;
      const results = await this.service.search(searchQuery);
      return res.status(200).json(results);
    } catch (error) {
      next(error);
    }
  };

  filter = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const filterCriteria = req.body;
      const filteredResults = await this.service.filter(filterCriteria);
      return res.status(200).json(filteredResults);
    } catch (error) {
      next(error);
    }
  };

  getAllPaginated = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const limit = parseInt(req.params.limit, 10);
      const page = parseInt(req.params.page, 10);
      const sort = req.query.sort || undefined; // Optional sort parameter

      const { data: paginatedResults, total } =
        await this.service.getAllPaginated(limit, page);
      return res.status(200).json({ data: paginatedResults, total });
    } catch (error) {
      next(error);
    }
  };

  update = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const id = req.params.id;
      const updatedData = req.body as ResourceData<T>;
      const updatedResource = await this.service.update(id, updatedData);
      if (!updatedResource) {
        return res
          .status(404)
          .json({ error: `Resource not found with id ${id}` });
      }
      return res.status(200).json(updatedResource);
    } catch (error) {
      next(error);
    }
  };

  delete = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const id = req.params.id;
      await this.service.delete(id);
      return res.status(204).send(); // No content on successful deletion
    } catch (error) {
      next(error);
    }
  };
}

export default BaseController;




// class BaseController<T> implements Controller<T> {
//   protected service: Service<T>;
//   constructor(service: Service<T>) {
//     this.service = service;
//   }

//   async create(req: Request, res: Response): Promise<Response> {
//     try {
//       const createData = req.body as ResourceData<T>;
//       console.log(this); /// ---> undeifine
//       const createdResource = await this.service.create(createData);
//       return res.status(201).json(createdResource);
//     } catch (error) {
//       console.error(error); // Log the error for debugging
//       return res.status(500).json({ error: "An unknown error occurred" });
//     }
//   }
//   async getAll(req: Request, res: Response): Promise<Response> {
//     try {
//       console.log(this); /// ---> undeifine
//       const resources = await this.service.getAll();
//       return res.status(200).json(resources);
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: "An unknown error occurred" });
//     }
//   }
// }
