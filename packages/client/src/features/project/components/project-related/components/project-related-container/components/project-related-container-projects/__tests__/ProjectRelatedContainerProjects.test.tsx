import { act, render, screen } from "@testing-library/react";
import ProjectRelatedContainerProjects from "../ProjectRelatedContainerProjects";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

vi.mock("react-router", () => ({
   ...vi.importActual("react-router"),
   Link: vi.fn(),
}));

describe("ProjectRelatedContainerProjects tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useTheme.tsx");
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

   test("renders ProjectRelatedContainerProjects loading span element by default", async () => {
      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<ProjectRelatedContainerProjects />);

      const loadingElement = screen.getByLabelText("Loading projects");
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

   test("renders ProjectRelatedContainerProjects error span element when API fetch fails", async () => {
      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<ProjectRelatedContainerProjects />);

      const loadingElement = screen.getByLabelText("Loading projects");
      expect(loadingElement).toBeInTheDocument();

      await act(async () => {
         resolveFetch({
            ok: false,
            status: 500,
            json: async () => ({ message: "HTTP error! status: 500" }),
         });

         await new Promise(process.nextTick);
      });

      const projectErrorSpan = await screen.findByLabelText("Error message");

      expect(projectErrorSpan).toBeInTheDocument();
      expect(projectErrorSpan).toHaveTextContent("Error loading projects: HTTP error! status: 500");
      expect(screen.queryByLabelText("Loading proejcts")).not.toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerProjects error span element when API returns an empy list of projects", async () => {
      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<ProjectRelatedContainerProjects />);

      const loadingProjectSpan = screen.getByLabelText("Loading projects");
      expect(loadingProjectSpan).toBeInTheDocument();

      await act(async () => {
         resolveFetch({
            ok: true,
            json: async () => ({
               success: true,
               data: [],
            }),
         });

         await new Promise(process.nextTick);
      });

      const projectErrorSpan = screen.getByLabelText("Error message");
      expect(projectErrorSpan).toHaveTextContent("No projects data available or unexpected format");
      expect(projectErrorSpan).toBeInTheDocument();
      expect(screen.queryByLabelText("Loading projects")).not.toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerProjects error span element when API returns null data", async () => {
      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<ProjectRelatedContainerProjects />);

      const loadingProjectSpan = screen.getByLabelText("Loading projects");
      expect(loadingProjectSpan).toBeInTheDocument();

      await act(async () => {
         resolveFetch({
            ok: true,
            json: async () => ({
               success: true,
               data: null,
            }),
         });

         await new Promise(process.nextTick);
      });

      const projectErrorSpan = screen.getByLabelText("Error message");
      expect(projectErrorSpan).toHaveTextContent("No projects data available or unexpected format.");
      expect(projectErrorSpan).toBeInTheDocument();
      expect(screen.queryByLabelText("Loading projects")).not.toBeInTheDocument();
   });

   test(`renders ProjectRelatedContainerProjects not found span element when returned "API returned success: false"`, async () => {
      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<ProjectRelatedContainerProjects />);

      const loadingProjectSpan = screen.getByLabelText("Loading projects");
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

   test("renders ProjectRelatedContainerProjects element", async () => {
      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<ProjectRelatedContainerProjects />);

      await act(async () => {
         resolveFetch({
            ok: true,
            json: async () => ({
               success: true,
               status: 200,
               data: mockProjects,
            }),
         });
      });

      const relatedContainerProjects = screen.getByLabelText("Related projects container projects");
      expect(relatedContainerProjects).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerProjects list element", async () => {
      // Fetching delayed with promise to emulate a delay in real fetch function

      let resolveFetch: (value: unknown) => void;
      const fetchPromise = new Promise((resolve) => {
         resolveFetch = resolve;
      });

      (global.fetch as vi.Mock).mockImplementationOnce(() => fetchPromise);

      render(<ProjectRelatedContainerProjects />);

      await act(async () => {
         resolveFetch({
            ok: true,
            json: async () => ({
               success: true,
               status: 200,
               data: mockProjects,
            }),
         });
      });

      const relatedContainerProjectsList = screen.getByTestId("related-projects-list");
      expect(relatedContainerProjectsList).toBeInTheDocument();
   });
});
