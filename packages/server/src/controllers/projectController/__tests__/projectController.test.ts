import { getProjectByName } from "../projectController.js";
import { dbQuery } from "../../../config/databaseConfig.js";
import { Mock } from "vitest"; // TODO: Get rid of this import statement by using globals importing
import { mockRequest, mockResponse, statusSpy, jsonSpy, initializeMocks, initializeConsoleErrorSpy, restoreConsoleErrorSpy, deinitializeMocks } from "./test-utils/test-utils.js";

describe("projectController controller tests", () => {
   beforeAll(() => {
      vi.mock("../../../config/databaseConfig.js");
   });

   beforeEach(() => {
      initializeConsoleErrorSpy();
      initializeMocks("project 01");
   });

   afterEach(() => {
      restoreConsoleErrorSpy();
      deinitializeMocks();
   });

   test("should return a correct project given a valid name", async () => {
      const mockProject = { project_name: "project 01" };

      (dbQuery as Mock).mockResolvedValueOnce({ rows: [mockProject] });

      await getProjectByName(mockRequest, mockResponse);

      expect(jsonSpy).toHaveBeenCalledWith(mockProject);
   });

   test("should return a correct project given a valid name with different case", async () => {
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
      initializeMocks("");

      await getProjectByName(mockRequest, mockResponse);

      expect(statusSpy).toHaveBeenCalledWith(400);
      expect(jsonSpy).toHaveBeenCalledWith({ message: "Project name is required" });
   });

   test("should return a 500 status code and an error message if an error occurs", async () => {
      (dbQuery as Mock).mockRejectedValueOnce(new Error("Database error"));

      await getProjectByName(mockRequest, mockResponse);

      expect(statusSpy).toHaveBeenCalledWith(500);
      expect(jsonSpy).toHaveBeenCalledWith({ message: "Internal server error" });
   });
});
