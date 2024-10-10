import dotenv from "dotenv";
import express from "express";
import { router } from "./routes/routes";

dotenv.config();

export const app = express();

app.use(express.text());
app.use(express.json());

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
