"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const express_jsdoc_swagger_1 = __importDefault(require("express-jsdoc-swagger"));
dotenv_1.default.config();
exports.app = (0, express_1.default)();
const options = {
    info: {
        version: "1.0.0",
        title: "TicTacTrip - Sloan Gauthier API Documentation",
        description: "API de l'exercice",
    },
    security: {
        BearerAuth: {
            type: "http",
            scheme: "bearer",
        },
    },
    baseDir: process.cwd(),
    filesPattern: "./src/**/*.ts",
    swaggerUIPath: "/api/docs",
    exposeSwaggerUI: true,
    exposeApiDocs: true,
    apiDocsPath: "/v3/api-docs",
};
(0, express_jsdoc_swagger_1.default)(exports.app)(options);
exports.app.use(express_1.default.text());
exports.app.use(express_1.default.json());
exports.app.use("/api", routes_1.router);
exports.app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
//# sourceMappingURL=app.js.map