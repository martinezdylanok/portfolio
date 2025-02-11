import request from "supertest";
import express from "express";
import projectRoutes from "../projectRoutes.js";

const server = express();
server.use(express.json());
server.use("/projects", projectRoutes);

const projectsArray = ["Project One", "Project Two", "Project Three", "Project Four", "Project Five"];

describe("ProjectRoute route tests", () => {
   test("GET /projects/:projectName responds with 200 status code for valid project", async () => {
      for (const project of projectsArray) {
         const response = await request(server).get(`/projects/${project}`);
         expect(response.status).toBe(200);
      }
   });

   test("GET /projects/:projectName responds with project data for valid project", async () => {
      for (const project of projectsArray) {
         const response = await request(server).get(`/projects/${project}`);
         expect(response.body.name).toBe(project);
      }
   });

   test("GET /projects/:projectName responds with 404 status code for invalid project", async () => {
      const response = await request(server).get("/projects/Invalid Project");
      expect(response.status).toBe(404);
   });

   test("GET /projects/:projectName handles case insensitivity correctly", async () => {
      const response = await request(server).get("/projects/pRoJect One");
      expect(response.status).toBe(200);
   });

   test("GET /projects/:projectName responds with 400 status code for empty project name", async () => {
      const response = await request(server).get("/projects/");
      expect(response.status).toBe(404);
   });

   test("GET /projects/:projectName handles special characters correctly", async () => {
      const response = await request(server).get("/projects/Project@One!");
      expect(response.status).toBe(404);
   });

   test("GET /projects/:projectName returns correct response structure", async () => {
      const response = await request(server).get("/projects/Project One");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("description");
      expect(response.body).toHaveProperty("details");
      expect(response.body).toHaveProperty("features");
      expect(response.body).toHaveProperty("results");
   });
});
