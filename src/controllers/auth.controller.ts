import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const sendToken = (req: Request, res: Response) => {
  const { email } = req.body;
  console.log(email);

  if (!email) {
    res.status(400).json({ message: "Missing email" });
    return;
  }

  const token = jwt.sign({ email: email }, process.env.SECRET_KEY!, {
    expiresIn: "24h",
  });

  res.json({ token });
};
