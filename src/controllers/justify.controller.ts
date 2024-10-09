import { Request, Response } from "express";
import { justifyText } from "../utils/justifyText";

export const justifyPlainText = (req: Request, res: Response) => {
  const text = req.body;
  const textJustified = justifyText(text);

  res.setHeader("Content-Type", "text/plain");
  res.send(textJustified);
};
