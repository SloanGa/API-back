import { Request, Response, Router } from "express";

export const justifyRoutes = Router();

justifyRoutes.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.end();
});
