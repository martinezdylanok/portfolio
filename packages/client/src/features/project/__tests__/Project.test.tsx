import { act, render, screen } from "@testing-library/react";
import { Link, MemoryRouter, useParams } from "react-router";
import Project from "../Project";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils.ts";

vi.mock("react-router", () => ({
   ...vi.importActual("react-router"),
   useParams: vi.fn(),
   Link: vi.fn(),
}));

describe("Project component tests", () => {
   beforeAll(() => {
      vi.mock("../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
      global.fetch = vi.fn(async () => {
         return Promise.resolve({
            ok: true,
            status: 200,
            json: async () => ({ success: true, data: {} }),
         });
      }) as vi.Mock;
   });

   afterAll(() => {
      resetModes();
   });

   test("renders the project loading span element by default", async () => {
      vi.mocked(useParams).mockReturnValue({ projectName: "project 01" });

      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<Project />);

      const loadingElement = screen.getByLabelText("Loading project");
      expect(loadingElement).toBeInTheDocument();

      await act(async () => {
         resolveFetch({
            ok: true,
            json: async () => ({
               success: true,
               status: 200,
               data: {
                  project_name: "Test Project: Part One",
               },
            }),
         });

         await new Promise(process.nextTick);
      });
   });

   test("renders the project error span when not given a project name", async () => {
      vi.mocked(useParams).mockReturnValue({ projectName: "" });

      render(<Project />);

      const projectErrorSpan = await screen.findByLabelText("Error message");

      expect(projectErrorSpan).toBeInTheDocument();
      expect(projectErrorSpan).toHaveTextContent("No projects data available or unexpected format.");
      expect(screen.queryByLabelText("Loading proejcts")).not.toBeInTheDocument();
   });

   test("renders the project error span element when given a wrong project name", async () => {
      vi.mocked(useParams).mockReturnValue({ projectName: "Wrong project" });

      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<Project />);

      const loadingProjectSpan = screen.getByLabelText("Loading project");
      expect(loadingProjectSpan).toBeInTheDocument();

      await act(async () => {
         resolveFetch({
            ok: false,
            status: 404,
            json: async () => ({
               message: "Project not found",
            }),
         });

         await new Promise(process.nextTick);
      });

      const projectErrorSpan = screen.getByLabelText("Error message");
      expect(projectErrorSpan).toHaveTextContent("Project not found");
      expect(projectErrorSpan).toBeInTheDocument();
   });

   test("renders the project not found span element when returned an unexpected API response format", async () => {
      vi.mocked(useParams).mockReturnValue({ projectName: "project 01" });

      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<Project />);

      const loadingProjectSpan = screen.getByLabelText("Loading project");
      expect(loadingProjectSpan).toBeInTheDocument();

      await act(async () => {
         resolveFetch({
            ok: true,
            json: async () => ({
               message: "Unexpected API response format",
            }),
         });

         await new Promise(process.nextTick);
      });

      const projectErrorSpan = screen.getByLabelText("Error message");
      expect(projectErrorSpan).toHaveTextContent("Unexpected API response format.");
      expect(projectErrorSpan).toBeInTheDocument();
   });

   test(`renders the project not found span element when returned "API returned success: false"`, async () => {
      vi.mocked(useParams).mockReturnValue({ projectName: "project 01" });

      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<Project />);

      const loadingProjectSpan = screen.getByLabelText("Loading project");
      expect(loadingProjectSpan).toBeInTheDocument();

      await act(async () => {
         resolveFetch({
            ok: true,
            json: async () => ({
               success: false,
               message: "API success returned: false",
            }),
         });

         await new Promise(process.nextTick);
      });

      const projectErrorSpan = screen.getByLabelText("Error message");
      expect(projectErrorSpan).toHaveTextContent("API success returned: false");
      expect(projectErrorSpan).toBeInTheDocument();
   });

   test("renders the project container element for a valid project", async () => {
      vi.mocked(useParams).mockReturnValue({ projectName: "Project 1" });

      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<Project />);

      await act(async () => {
         resolveFetch({
            ok: true,
            json: async () => ({
               success: true,
               status: 200,
               data: {
                  project_name: "Project 01",
               },
            }),
         });
      });

      const projectContainer = screen.getByLabelText("Project container");
      expect(projectContainer).toBeInTheDocument();
   });
});
