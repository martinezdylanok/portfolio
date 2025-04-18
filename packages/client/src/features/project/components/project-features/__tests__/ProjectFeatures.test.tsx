import { render, screen } from "@testing-library/react";
import ProjectFeatures from "../ProjectFeatures";
import { mockProjects, resetModes, setupLightMode } from "./data-utils/dataUtils";

describe("ProjectFeatures component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders the ProjectFeatures element", () => {
      render(<ProjectFeatures project={mockProjects[0]} />);
      const projectFeatures = screen.getByLabelText("Project features");
      expect(projectFeatures).toBeInTheDocument();
   });
});
