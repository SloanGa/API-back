import { Request, Response } from "express";
import { justifyText } from "../utils/justifyText";

export const justifyPlainText = (req: Request, res: Response) => {
  const text = req.body;

  if (!text) {
    res.status(400).json({ message: "Text content is required" });
    return;
  }
  const textJustified = justifyText(text);

  res.setHeader("Content-Type", "text/plain");
  res.send(textJustified);
};
