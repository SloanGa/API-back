import { Router } from "express";
import { sendToken } from "../controllers/auth.controller";

export const authRoutes = Router();

authRoutes.post("/", sendToken);
