import request from "supertest";
import server from "../server.js";

describe("Express server tests", () => {
   /*First two will not work until we set a index route */
   test("GET / responds with 200 status code", async () => {
      const response = await request(server).get("/");
      expect(response.status).toBe(200);
   });

   test("GET / responds with 'Welcome to the API'", async () => {
      const response = await request(server).get("/");
      expect(response.text).toContain("<!DOCTYPE html>");
   });

   test("CORS headers are set", async () => {
      const response = await request(server).get("/");
      expect(response.headers["access-control-allow-origin"]).toBe("*");
   });

   test("JSON parsing middleware works", async () => {
      const response = await request(server).post("/").send({ name: "Test Project" }).set("Content-Type", "application/json");
      expect(response.status).not.toBe(400);
   });

   test("Unknown route responds with 404", async () => {
      const response = await request(server).get("/unknown-route");
      expect(response.status).toBe(404);
   });
});
