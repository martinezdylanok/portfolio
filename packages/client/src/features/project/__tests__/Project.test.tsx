import { act, render, screen } from "@testing-library/react";
import { MemoryRouter, useParams } from "react-router";
import Project from "../Project";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils.ts";

describe("Project component tests", () => {
   beforeAll(() => {
      vi.mock("../../../utils/hooks/useTheme.tsx");
      vi.mock("react-router", async () => {
         const actual = await vi.importActual<typeof import("react-router")>("react-router");
         return {
            ...actual,
            useParams: vi.fn().mockReturnValue({}),
         };
      });

      vi.useFakeTimers();
   });

   beforeEach(() => {
      setupLightMode();
      vi.clearAllMocks();
      vi.mocked(useParams).mockReturnValue({});
   });

   afterAll(() => {
      resetModes();
      vi.useRealTimers();
   });

   test("renders the loading span element given a project name", async () => {
      vi.mocked(useParams).mockReturnValue({ projectName: "test-project" });

      global.fetch = vi.fn().mockImplementation(() => {
         return new Promise((resolve) => {
            resolve({
               ok: true,
               json: async () => ({ success: true, data: mockProjects[0] }),
            });
         });
      });

      render(<Project />);

      const loadingProjectSpan = screen.getByLabelText("Loading project");
      expect(loadingProjectSpan).toBeInTheDocument();
   });

   test("renders the project not found span element when not given a project name", async () => {
      render(<Project />);

      const projectNotFoundSpan = screen.getByLabelText("Project not found error");
      expect(projectNotFoundSpan).toBeInTheDocument();
   });

   test("renders the project not found span element when given a wrong project name", async () => {
      vi.mocked(useParams).mockReturnValue({ projectName: "wrong-project" });

      global.fetch = vi.fn().mockImplementation(() => {
         return new Promise((resolve) => {
            setTimeout(() => {
               resolve({
                  ok: false,
                  status: 404,
                  json: async () => ({ success: false }),
               });
            }, 200);
         });
      });

      render(<Project />);

      const loadingProjectSpan = screen.getByLabelText("Loading project");
      expect(loadingProjectSpan).toBeInTheDocument();

      await act(async () => {
         await vi.runAllTimersAsync();
      });

      const projectNotFoundSpan = screen.getByLabelText("Project not found error");
      expect(projectNotFoundSpan).toBeInTheDocument();
   });

   test("renders the project not found span element when returned an unexpected API response format", async () => {
      vi.mocked(useParams).mockReturnValue({ projectName: "Whatever" });

      global.fetch = vi.fn().mockImplementation(() => {
         return new Promise((resolve) => {
            setTimeout(() => {
               resolve({
                  ok: true,
                  json: async () => ({ success: true }),
               });
            }, 200);
         });
      });

      render(<Project />);

      const loadingProjectSpan = screen.getByLabelText("Loading project");
      expect(loadingProjectSpan).toBeInTheDocument();

      await act(async () => {
         await vi.runAllTimersAsync();
      });

      const projectNotFoundSpan = screen.getByLabelText("Project not found error");
      expect(projectNotFoundSpan).toBeInTheDocument();
   });

   test("renders the project not found span element when fetch throws error", async () => {
      vi.mocked(useParams).mockReturnValue({ projectName: "test-project" });

      global.fetch = vi.fn().mockImplementation(() => Promise.reject(new Error("Network error")));

      render(<Project />);

      await act(async () => {
         await vi.runAllTimersAsync();
      });

      const projectNotFoundSpan = screen.getByLabelText("Project not found error");
      expect(projectNotFoundSpan).toBeInTheDocument();
   });

   test("renders the project container element", async () => {
      vi.mocked(useParams).mockReturnValue({ projectName: "Project 1" });

      global.fetch = vi.fn().mockImplementation(() => {
         return new Promise((resolve) => {
            resolve({
               ok: true,
               json: async () => ({ success: true, data: mockProjects[0] }),
            });
         });
      });

      render(
         <MemoryRouter>
            <Project />
         </MemoryRouter>,
      );

      await act(async () => {
         await vi.runAllTimersAsync();
      });

      const projectContainer = screen.getByLabelText("Project container");
      expect(projectContainer).toBeInTheDocument();
   });
});
