import { Router } from "express";
import { sendToken } from "../controllers/auth.controller";

export const authRoutes = Router();

/**
 * credential type
 * @typedef {object} Credentials
 * @property {string} email - User email
 */

/**
 * token
 * @typedef {object} Token
 * @property {string} token - Token
 */

/**
 * @typedef {object} Error
 * @property {string} message - Error Message
 */

/**
 * POST /api/auth
 * @summary Send a unique token to access /api/justify
 * @param {Credentials} request.body.required - User Email
 * @returns {Token} 200 - Success response containing the token - application/json
 * @returns {Error} 400 - Missing email - application/json
 * @returns {Error} 500 - Error generating token - application/json
 * @example request - example email
 * {
 *   "email": "test@test.fr"
 * }
 */
authRoutes.post("/", sendToken);
