"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sendToken = (req, res) => {
    const { email } = req.body;
    if (!email) {
        res.status(400).json({ message: "Missing email" });
        return;
    }
    try {
        const token = jsonwebtoken_1.default.sign({ email: email }, process.env.SECRET_KEY, {
            expiresIn: "24h",
        });
        res.json({ token });
    }
    catch (err) {
        console.error("Error generating token:", err);
        res.status(500).json({ message: "Error generating token" });
    }
};
exports.sendToken = sendToken;
//# sourceMappingURL=auth.controller.js.map