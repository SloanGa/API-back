import { Request, Response } from "express";

export const justifyPlainText = (req: Request, res: Response) => {
  console.log(req.body);
  res.end();
};
