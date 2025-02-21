import request from "supertest";
import server from "../server.js";

describe("Express server tests", () => {
   test("should responds with 200 status code when using GET /", async () => {
      const response = await request(server).get("/");
      expect(response.status).toBe(200);
   });

   test("should return the HTML body when using GET /'", async () => {
      const response = await request(server).get("/");
      expect(response.text).toContain("<!doctype html>");
   });

   test("should set CORS headers", async () => {
      const response = await request(server).get("/");
      expect(response.headers["access-control-allow-origin"]).toBe("*");
   });

   test("should not be 404 when sending JSON parsing middlework", async () => {
      const response = await request(server).post("/").send({ name: "Test Project" }).set("Content-Type", "application/json");
      expect(response.status).not.toBe(400);
   });

   test("should respond with 404 when trying to GET into an unknown route", async () => {
      const response = await request(server).get("/unknown-route");
      expect(response.status).toBe(404);
   });
});
