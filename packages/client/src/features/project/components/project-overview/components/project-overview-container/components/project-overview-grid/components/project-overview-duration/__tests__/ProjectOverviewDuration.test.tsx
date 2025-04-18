import { render, screen } from "@testing-library/react";
import ProjectOverviewDuration from "../ProjectOverviewDuration";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectOverviewDuration tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectOverviewDuration element", () => {
      render(<ProjectOverviewDuration project={mockProjects[0]} />);
      const projectOverviewDuration = screen.getByLabelText("Project overview duration");
      expect(projectOverviewDuration).toBeInTheDocument();
   });

   test("renders ProjectOverviewDuration subtitle", () => {
      render(<ProjectOverviewDuration project={mockProjects[0]} />);
      const durationTitle = screen.getByRole("heading");
      expect(durationTitle).toHaveTextContent("Duration");
      expect(durationTitle).toBeInTheDocument();
   });

   test("renders ProjectOverviewDuration value", () => {
      render(<ProjectOverviewDuration project={mockProjects[0]} />);
      expect(screen.getByText(mockProjects[0].project_overview_duration)).toBeInTheDocument();
   });
});
