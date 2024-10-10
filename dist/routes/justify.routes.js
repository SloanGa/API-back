"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justifyRoutes = void 0;
const express_1 = require("express");
const justify_controller_1 = require("../controllers/justify.controller");
const verifyToken_1 = require("../middlewares/verifyToken");
exports.justifyRoutes = (0, express_1.Router)();
exports.justifyRoutes.post("/", verifyToken_1.verifyToken, justify_controller_1.justifyPlainText);
//# sourceMappingURL=justify.routes.js.map