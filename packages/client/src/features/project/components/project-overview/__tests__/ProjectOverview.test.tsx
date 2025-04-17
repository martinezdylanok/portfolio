import { render, screen } from "@testing-library/react";
import ProjectOverview from "../ProjectOverview";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectOverview component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders the ProjectOverview element", () => {
      render(<ProjectOverview project={mockProjects[0]} />);
      const projectOverview = screen.getByLabelText("Project overview");
      expect(projectOverview).toBeInTheDocument();
   });
});
