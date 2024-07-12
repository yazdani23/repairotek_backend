import { Request, Response } from "express";

class IndexController {
  index(req: Request, res: Response): Response {
    return res.status(200).send("Welcome route");
  }
  route404(req: Request, res: Response): Response {
    return res.status(404).send("not found 404");
  }
}

export default new IndexController();
