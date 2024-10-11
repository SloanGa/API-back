"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        res.status(401).json({ message: "Missing authorization token" });
        return;
    }
    const token = authorization.split(" ")[1];
    try {
        const jwtContent = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        req.email = jwtContent.email;
        req.token = token;
    }
    catch (err) {
        res.status(401).json({ message: "Invalid or expired token" });
        return;
    }
    next();
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=verifyToken.js.map