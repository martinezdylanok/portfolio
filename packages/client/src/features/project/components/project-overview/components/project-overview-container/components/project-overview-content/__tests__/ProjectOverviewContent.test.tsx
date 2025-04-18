import { render, screen } from "@testing-library/react";
import ProjectOverviewContent from "../ProjectOverviewContent";
import { mockProjects, resetModes, setupLightMode } from "./data-utils/dataUtilts";

describe("ProjectOverviewContent tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectOverviewContent element", () => {
      render(<ProjectOverviewContent project={mockProjects[0]} />);
      const projectOverviewContent = screen.getByLabelText("Project overview content");
      expect(projectOverviewContent).toBeInTheDocument();
   });

   test("renders Project overview subtitle", () => {
      render(<ProjectOverviewContent project={mockProjects[0]} />);
      const overviewTitle = screen.getByRole("heading");
      expect(overviewTitle).toHaveTextContent("OVERVIEW");
      expect(overviewTitle).toBeInTheDocument();
   });

   test("renders Project overview paragraph", () => {
      render(<ProjectOverviewContent project={mockProjects[0]} />);
      expect(screen.getByText(mockProjects[0].project_overview_description)).toBeInTheDocument();
   });
});
