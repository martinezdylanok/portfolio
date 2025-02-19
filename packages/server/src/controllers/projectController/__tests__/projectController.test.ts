import { getProjectByName } from "../projectController.js";
import { dbQuery } from "../../../config/databaseConfig.js";
import { Mock } from "vitest"; // TODO: Get rid of this import statement by using globals importing

vi.mock("../../../config/databaseConfig.js");

describe("projectController controller tests", () => {
   let mockRequest: any;
   let mockResponse: any;
   let statusSpy: any;
   let jsonSpy: any;

   const initializeMocks = (projectName: string) => {
      mockRequest = { params: { projectName } };
      mockResponse = { status: vi.fn().mockReturnThis(), json: vi.fn() };
      statusSpy = vi.spyOn(mockResponse, "status");
      jsonSpy = vi.spyOn(mockResponse, "json");
   };

   test("should return a correct project given a valid name", async () => {
      initializeMocks("project 01");

      const mockProject = { project_name: "project 01" };

      (dbQuery as Mock).mockResolvedValueOnce({ rows: [mockProject] });

      await getProjectByName(mockRequest, mockResponse);

      expect(jsonSpy).toHaveBeenCalledWith(mockProject);
   });

   test("should return a correct project vien a valid name with different case", async () => {
      initializeMocks("ProJect 01");

      const mockProject = { project_name: "project 01" };

      (dbQuery as Mock).mockResolvedValueOnce({ rows: [mockProject] });

      await getProjectByName(mockRequest, mockResponse);

      expect(jsonSpy).toHaveBeenCalledWith(mockProject);
   });

   test("should not return a project given an invalid name", async () => {
      initializeMocks("invalid project");

      (dbQuery as Mock).mockResolvedValueOnce({ rows: [] });

      await getProjectByName(mockRequest, mockResponse);

      expect(statusSpy).toHaveBeenCalledWith(404);
      expect(jsonSpy).toHaveBeenCalledWith({ message: `Project with name ${mockRequest.params.projectName} not found` });
   });

   test("should return a 400 status code if projectName parameter is missing", async () => {
      mockRequest = { params: {} };

      await getProjectByName(mockRequest, mockResponse);

      expect(statusSpy).toHaveBeenCalledWith(400);
      expect(jsonSpy).toHaveBeenCalledWith({ message: "Project name is required" });
   });

   test("should return a 500 status code and an error message if an error occurs", async () => {
      initializeMocks("project 01");

      (dbQuery as Mock).mockRejectedValueOnce(new Error("Database error"));

      await getProjectByName(mockRequest, mockResponse);

      expect(statusSpy).toHaveBeenCalledWith(500);
      expect(jsonSpy).toHaveBeenCalledWith({ message: "Internal server error" });
   });
});
