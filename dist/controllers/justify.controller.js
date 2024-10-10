"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justifyPlainText = void 0;
const justifyText_1 = require("../utils/justifyText");
const justifyPlainText = (req, res) => {
    const text = req.body;
    if (!text) {
        res.status(400).json({ message: "Text content is required" });
        return;
    }
    const textJustified = (0, justifyText_1.justifyText)(text);
    res.setHeader("Content-Type", "text/plain");
    res.send(textJustified);
};
exports.justifyPlainText = justifyPlainText;
//# sourceMappingURL=justify.controller.js.map