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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../app");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateToken = () => {
    const payload = { email: "test@maxcharacter.limit" };
    const secret = process.env.SECRET_KEY;
    const options = { expiresIn: "1m" };
    return jsonwebtoken_1.default.sign(payload, secret, options);
};
describe("POST /api/justify", () => {
    it("should return 402 if the character limit is exceeded", () => __awaiter(void 0, void 0, void 0, function* () {
        const longText = "A".repeat(80001);
        const token = generateToken();
        const response = yield (0, supertest_1.default)(app_1.app)
            .post("/api/justify")
            .set("Authorization", `Bearer ${token}`)
            .set("Content-Type", "text/plain")
            .send(longText);
        expect(response.status).toBe(402);
        expect(response.body.message).toBe("Character limit exceeded for today");
    }));
    it("should return 200 if the character limit is not exceeded", () => __awaiter(void 0, void 0, void 0, function* () {
        const validText = "A".repeat(1000);
        const token = generateToken();
        const response = yield (0, supertest_1.default)(app_1.app)
            .post("/api/justify")
            .set("Authorization", `Bearer ${token}`)
            .set("Content-Type", "text/plain")
            .send(validText);
        expect(response.status).toBe(200);
    }));
});
//# sourceMappingURL=checkCharacterLimit.test.js.map