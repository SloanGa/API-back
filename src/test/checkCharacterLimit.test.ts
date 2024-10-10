import request from "supertest";
import { app } from "../app";

describe("POST /api/justify", () => {
  it("should return 402 if the character limit is exceeded", async () => {
    const longText = "A".repeat(80001);

    const response = await request(app)
      .post("/api/justify")
      .set("Authorization", `Bearer ${process.env.VALIDE_TOKEN}`)
      .set("Content-Type", "text/plain")
      .send(longText);

    expect(response.status).toBe(402);
    expect(response.body.message).toBe("Character limit exceeded for today");
  });

  it("should return 200 if the character limit is not exceeded", async () => {
    const validText = "A".repeat(1000);

    const response = await request(app)
      .post("/api/justify")
      .set("Authorization", `Bearer ${process.env.VALIDE_TOKEN}`)
      .set("Content-Type", "text/plain")
      .send(validText);

    expect(response.status).toBe(200);
  });
});
