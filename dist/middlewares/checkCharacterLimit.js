"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCharacterLimit = void 0;
const client_1 = require("../database/client");
const checkCharacterLimit = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.email;
    const textLength = req.body.length;
    try {
        const userData = yield client_1.redisClient.get(`user:${email}`);
        if (userData) {
            const parseUserData = JSON.parse(userData);
            if (parseUserData.currentCharacter + textLength > 80000) {
                res.status(402).json({ message: "Character limit exceeded for today" });
                return;
            }
            parseUserData.currentCharacter += textLength;
            yield client_1.redisClient.set(`user:${email}`, JSON.stringify(parseUserData));
        }
        else {
            const newUserData = {
                email: email,
                currentCharacter: textLength,
            };
            yield client_1.redisClient.set(`user:${email}`, JSON.stringify(newUserData), {
                EX: 86400,
            });
        }
        next();
    }
    catch (err) {
        console.error("Error interacting with Redis:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.checkCharacterLimit = checkCharacterLimit;
//# sourceMappingURL=checkCharacterLimit.js.map