"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const justify_routes_1 = require("./justify.routes");
const auth_routes_1 = require("./auth.routes");
exports.router = (0, express_1.Router)();
exports.router.use("/justify", justify_routes_1.justifyRoutes);
exports.router.use("/auth", auth_routes_1.authRoutes);
//# sourceMappingURL=routes.js.map