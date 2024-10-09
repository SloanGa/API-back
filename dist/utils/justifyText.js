"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.justifyText = void 0;
const justifyText = (text) => {
    const maxLineLength = 80;
    const words = text.split(" ");
    let result = [];
    let currentLine = [];
    let currentLength = 0;
    words.forEach((word) => {
        if (currentLength + word.length + currentLine.length > maxLineLength) {
            let spacesToAdd = maxLineLength - currentLength;
            let gaps = currentLine.length - 1;
            let spacePerGap = Math.floor(spacesToAdd / gaps);
            let extraSpaces = spacesToAdd % gaps;
            let justifiedLine = "";
            currentLine.forEach((word, index) => {
                justifiedLine += word;
                if (index < gaps) {
                    justifiedLine += " ".repeat(spacePerGap + (index < extraSpaces ? 1 : 0));
                }
            });
            result.push(justifiedLine);
            currentLine = [word];
            currentLength = word.length;
        }
        else {
            currentLine.push(word);
            currentLength += word.length;
        }
    });
    result.push(currentLine.join(" "));
    return result.join("\n");
};
exports.justifyText = justifyText;
//# sourceMappingURL=justifyText.js.map