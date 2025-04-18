import { render, screen } from "@testing-library/react";
import ProjectOverviewTechnologies from "../ProjectOverviewTechnologies";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectOverviewTechnologies tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectOverviewTechnoligies element", () => {
      render(<ProjectOverviewTechnologies project={mockProjects[0]} />);
      const element = screen.getByLabelText("Project overview technologies");
      expect(element).toBeInTheDocument();
   });

   test("renders ProjectOverviewTechnoligies title element", () => {
      render(<ProjectOverviewTechnologies project={mockProjects[0]} />);
      const technologiesTitle = screen.getByRole("heading");
      expect(technologiesTitle).toHaveTextContent("Technologies");
      expect(technologiesTitle).toBeInTheDocument();
   });

   test("renders the correct ProjectOverviewTechnoligies paragraph element", () => {
      render(<ProjectOverviewTechnologies project={mockProjects[0]} />);
      expect(screen.getByText(mockProjects[0].project_overview_technologies)).toBeInTheDocument();
   });
});
