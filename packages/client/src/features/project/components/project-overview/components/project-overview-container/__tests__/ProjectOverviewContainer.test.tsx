import { render, screen } from "@testing-library/react";
import ProjectOverviewContainer from "../ProjectOverviewContainer";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectOverviewContainer tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectOverviewContainer element", () => {
      render(<ProjectOverviewContainer project={mockProjects[0]} />);
      const projectOverviewContainer = screen.getByLabelText("Overview container");
      expect(projectOverviewContainer).toBeInTheDocument();
   });
});
