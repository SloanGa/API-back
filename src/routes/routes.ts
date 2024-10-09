import { Router } from "express";
import { justifyRoutes } from "./justify.routes";
import { authRoutes } from "./auth.routes";

export const router = Router();

router.use("/justify", justifyRoutes);
router.use("/auth", authRoutes);
