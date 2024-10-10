import { createClient } from "redis";

export const redisClient = createClient();

redisClient.connect().then(() => {
  console.log("connected to the database!");
});

redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});
