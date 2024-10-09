import { Router } from "express";
import { justifyPlainText } from "../controllers/justify.controller";

export const justifyRoutes = Router();

justifyRoutes.post("/", justifyPlainText);
