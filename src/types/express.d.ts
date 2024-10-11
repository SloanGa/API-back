import { Request } from "express";

declare module "express" {
  interface Request {
    email?: string;
    token?: string;
  }
}
