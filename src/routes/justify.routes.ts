import { Router } from "express";
import { justifyPlainText } from "../controllers/justify.controller";
import { verifyToken } from "../middlewares/verifyToken";
import { checkCharacterLimit } from "../middlewares/checkCharacterLimit";

export const justifyRoutes = Router();

justifyRoutes.post("/", verifyToken, checkCharacterLimit, justifyPlainText);
