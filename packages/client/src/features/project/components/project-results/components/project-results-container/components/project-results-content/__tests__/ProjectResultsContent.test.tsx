import { render, screen } from "@testing-library/react";
import ProjectResultsContent from "../ProjectResultsContent";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectResultsContent tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectResultsContent element", () => {
      render(<ProjectResultsContent project={mockProjects[0]} />);
      const projectResultsContainer = screen.getByLabelText("Project results content");
      expect(projectResultsContainer).toBeInTheDocument();
   });

   test("renders Project results subtitle", () => {
      render(<ProjectResultsContent project={mockProjects[0]} />);
      expect(screen.getByTestId("results-content-paragraph")).toHaveTextContent(mockProjects[0].project_final_results);
   });

   test("renders Project results container", () => {
      render(<ProjectResultsContent project={mockProjects[0]} />);
      const projectResultsContent = screen.getByTestId("results-content-container");
      expect(projectResultsContent).toBeInTheDocument();
   });

   test("renders Project results inner container elements", () => {
      render(<ProjectResultsContent project={mockProjects[0]} />);
      const projectResultsContentInner = screen.getAllByTestId("results-content-inner-container");
      expect(projectResultsContentInner.length).toBe(2);
      projectResultsContentInner.forEach((element) => {
         expect(element).toBeInTheDocument();
      });
   });

   test("renders correct stats labels and values", () => {
      render(<ProjectResultsContent project={mockProjects[0]} />);
      expect(screen.getByText("CTR")).toBeInTheDocument();
      expect(screen.getByText("12%")).toBeInTheDocument();
      expect(screen.getByText("Number of new clients")).toBeInTheDocument();
      expect(screen.getByText("245")).toBeInTheDocument();
   });

   test("renders Project header container", () => {
      render(<ProjectResultsContent project={mockProjects[0]} />);
      const projectResultsHeader = screen.getByTestId("results-content-header");
      expect(projectResultsHeader).toBeInTheDocument();
   });

   test("renders the header title three times", () => {
      render(<ProjectResultsContent project={mockProjects[0]} />);
      const allTitles = screen.getAllByText("FINAL RESULTS");
      expect(allTitles.length).toBe(3);
   });
});
