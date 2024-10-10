import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const sendToken = (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: "Missing email" });
    return;
  }
  try {
    const token = jwt.sign({ email: email }, process.env.SECRET_KEY!, {
      expiresIn: "24h",
    });

    res.json({ token });
  } catch (err) {
    console.error("Error generating token:", err);
    res.status(500).json({ message: "Error generating token" });
  }
};
