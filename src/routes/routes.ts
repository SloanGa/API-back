import Router from "express";
import { justifyRoutes } from "./justify.routes";

export const router = Router();

router.use("/justify", justifyRoutes);
