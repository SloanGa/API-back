"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justifyRoutes = void 0;
const express_1 = require("express");
exports.justifyRoutes = (0, express_1.Router)();
exports.justifyRoutes.post("/", (req, res) => {
    console.log(req.body);
    res.end();
});
//# sourceMappingURL=justify.routes.js.map