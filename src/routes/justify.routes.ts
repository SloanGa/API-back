import { Router } from "express";
import { justifyPlainText } from "../controllers/justify.controller";
import { verifyToken } from "../middlewares/verifyToken";

export const justifyRoutes = Router();

justifyRoutes.post("/", verifyToken, justifyPlainText);
