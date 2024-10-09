import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
