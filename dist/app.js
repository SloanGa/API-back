"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.text());
app.use("/api", routes_1.router);
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
//# sourceMappingURL=app.js.map