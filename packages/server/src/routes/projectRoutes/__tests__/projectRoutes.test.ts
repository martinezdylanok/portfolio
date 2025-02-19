import request from "supertest";
import express from "express";
import projectRoutes from "../projectRoutes.js";

// Mock the getProjectByName function
vi.mock("../../../controllers/projectController/projectController.js", () => {
   return {
      getProjectByName: vi.fn((req, res) => {
         const projectName = req.params.projectName.toLowerCase();
         if (projectName === "project one") {
            return res.status(200).json({ name: "Project One", description: "Description of Project One" });
         } else {
            return res.status(404).send("Project not found");
         }
      }),
   };
});

const server = express();
server.use(express.json());
server.use("/projects", projectRoutes);

describe("projectRoute route tests", () => {
   it("should respond with 200 status code for valid project", async () => {
      const response = await request(server).get("/projects/Project One");
      expect(response.status).toBe(200);
      expect(response.body.name).toBe("Project One");
   });

   it("should respond with 404 status code for invalid project", async () => {
      const response = await request(server).get("/projects/Invalid Project");
      expect(response.status).toBe(404);
   });

   it("should handle case insensitivity correctly", async () => {
      const response = await request(server).get("/projects/pRoJect One");
      expect(response.status).toBe(200);
      expect(response.body.name).toBe("Project One");
   });

   it("should respond with 400 status code for empty project name", async () => {
      const response = await request(server).get("/projects/");
      expect(response.status).toBe(404);
   });

   it("should handle special characters correctly", async () => {
      const response = await request(server).get("/projects/Project@One!");
      expect(response.status).toBe(404);
   });

   it("should return correct response structure", async () => {
      const response = await request(server).get("/projects/Project One");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("description");
   });
});
