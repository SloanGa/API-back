"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
const redis_1 = require("redis");
exports.redisClient = (0, redis_1.createClient)();
exports.redisClient.connect().then(() => {
    console.log("connected to the database!");
});
exports.redisClient.on("error", (err) => {
    console.error("Redis error:", err);
});
//# sourceMappingURL=client.js.map