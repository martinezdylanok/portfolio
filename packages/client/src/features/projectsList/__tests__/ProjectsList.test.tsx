import { render, screen, waitFor } from "@testing-library/react";
import ProjectsList from "../ProjectsList";
import { MOCKED_ERROR_MESSAGE, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectsList component tests", () => {
   beforeAll(() => {
      vi.mock("../../../utils/hooks/useTheme");
      global.fetch = vi.fn();
   });

   beforeEach(() => {
      (global.fetch as vi.Mock).mockReset();
      setupLightMode();
   });

   afterAll(() => {
      vi.restoreAllMocks();
      resetModes();
   });

   test("should render loading element by default", () => {
      (global.fetch as vi.Mock).mockResolvedValueOnce({
         ok: true,
         json: async () => ({ success: true, data: [] }),
      });

      render(<ProjectsList />);
      const loadingElement = screen.getByLabelText("Loading projects");
      expect(loadingElement).toBeInTheDocument();
   });

   test("should render error element when an error occurs", async () => {
      (global.fetch as vi.Mock).mockResolvedValueOnce({
         ok: false,
         status: 500,
         json: async () => ({ message: MOCKED_ERROR_MESSAGE }),
      });

      render(<ProjectsList />);

      await waitFor(() => {
         const errorElement = screen.getByLabelText("Error message");
         expect(errorElement).toBeInTheDocument();
         expect(errorElement).toHaveTextContent(`Error loading projects: ${MOCKED_ERROR_MESSAGE}`);
      });
   });

   test("should render unexpected format element when there is no projects data or the format is incorrect", async () => {
      (global.fetch as vi.Mock).mockResolvedValueOnce({
         ok: true,
         json: async () => ({ success: true, data: null }),
      });

      render(<ProjectsList />);

      await waitFor(() => {
         const unexpectedFormatElement = screen.getByLabelText("Error message");
         expect(unexpectedFormatElement).toBeInTheDocument();
         expect(unexpectedFormatElement).toHaveTextContent("No projects data available or unexpected format");
      });
   });

   test("should render ProjectsList element", async () => {
      (global.fetch as vi.Mock).mockResolvedValueOnce({
         ok: true,
         json: async () => ({ success: true, data: [] }),
      });

      render(<ProjectsList />);

      await waitFor(() => {
         const projectsList = screen.getByRole("main");
         expect(projectsList).toBeInTheDocument();
      });
   });

   test("should render ProjectsList container div element", async () => {
      (global.fetch as vi.Mock).mockResolvedValueOnce({
         ok: true,
         json: async () => ({ success: true, data: [] }),
      });

      render(<ProjectsList />);

      await waitFor(() => {
         const projectsListContainer = screen.getByLabelText("Projects list container");
         expect(projectsListContainer).toBeInTheDocument();
      });
   });

   test.only("should render ProjectsList ul element", async () => {
      (global.fetch as vi.Mock).mockResolvedValueOnce({
         ok: true,
         json: async () => ({ success: true, data: [] }),
      });

      render(<ProjectsList />);

      await waitFor(() => {
         const projectsListUl = screen.getByTestId("projects-ul");
         expect(projectsListUl).toBeInTheDocument();
      });
   });
});
