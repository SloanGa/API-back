import { Router } from "express";
import { justifyPlainText } from "../controllers/justify.controller";
import { verifyToken } from "../middlewares/verifyToken";
import { checkCharacterLimit } from "../middlewares/checkCharacterLimit";

export const justifyRoutes = Router();

/**
 * POST /api/justify
 * @summary Justifies the given text
 * @param {string} request.body.required - The text to justify - text/plain
 * @returns {string} 200 - Success response containing justified text - text/plain
 * @returns {Error} 400 - Missing text - application/json
 * @returns {Error} 401 - Missing or invalid token - application/json
 * @returns {Error} 402 - Character limit exceeded - application/json
 * @returns {Error} 500 - Internal server error  - application/json
 */
justifyRoutes.post("/", verifyToken, checkCharacterLimit, justifyPlainText);
