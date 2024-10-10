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
const client_1 = require("../database/client");
jest.mock("redis", () => {
    const originalModule = jest.requireActual("redis");
    return Object.assign(Object.assign({}, originalModule), { createClient: jest.fn(() => ({
            set: jest.fn(),
            get: jest.fn(),
            ping: jest.fn(() => Promise.resolve("PONG")),
            quit: jest.fn(),
        })) });
});
describe("Redis Tests", () => {
    let client;
    beforeAll(() => {
        client = client_1.redisClient;
    });
    afterAll(() => {
        jest.restoreAllMocks();
    });
    it("should reinit character limit after 24h", () => __awaiter(void 0, void 0, void 0, function* () {
        const email = "test@test.fr";
        const userData = {
            email,
            currentCharacter: 500,
        };
        client.set.mockImplementationOnce((key, value, options, callback) => {
            callback(null, "OK");
        });
        yield client_1.redisClient.set(`user:${email}`, JSON.stringify(userData), { EX: 86400 });
        client.get.mockImplementationOnce((key, callback) => {
            callback(null, JSON.stringify(userData));
        });
        let user = yield client_1.redisClient.get(`user:${email}`);
        expect(user).not.toBeNull();
        let parseUserData = JSON.parse(user);
        expect(parseUserData.currentCharacter).toBe(500);
        jest.useFakeTimers();
        jest.advanceTimersByTime(86400000);
        client.get.mockImplementationOnce((key, callback) => {
            callback(null, null);
        });
        user = yield client_1.redisClient.get(`user:${email}`);
        expect(user).toBeNull();
        jest.useRealTimers();
    }));
});
//# sourceMappingURL=redis.test.js.map