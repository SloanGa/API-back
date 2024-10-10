import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    res.status(401).json({ message: "Missing authorization token" });
    return;
  }
  const token = authorization.split(" ")[1];
  try {
    const jwtContent = jwt.verify(token, process.env.SECRET_KEY!) as {
      email: string;
      iat: number;
      exp: number;
    };

    req.email = jwtContent.email;
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
    return;
  }
  next();
};
