import { Request, Response, NextFunction } from "express";

export interface IController<T> {
  create: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
  update: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
  edit: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
  delete: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;

  getAll: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
  getById: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
  search: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
  filter: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
  getAllPaginated: (req: Request, res: Response, next: NextFunction) => Promise<Response | void>;
}

export type Controller<T> = IController<T>;
