"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justifyText = void 0;
const justifyText = (text) => {
    const maxLineLength = 80;
    const words = text.split(" ");
    let result = [];
    let currentLine = "";
    words.forEach((word) => {
        if ((currentLine + word).length > maxLineLength) {
            result.push(currentLine);
            currentLine = word;
        }
        else {
            currentLine += (currentLine ? " " : "") + word;
        }
    });
    if (currentLine) {
        result.push(currentLine);
    }
    return result.join("\n");
};
exports.justifyText = justifyText;
//# sourceMappingURL=justifyText.js.map