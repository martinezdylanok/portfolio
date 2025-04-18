import { render, screen } from "@testing-library/react";
import ProjectResultsContainer from "../ProjectResultsContainer";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectResultsContainer tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectResultsContainer element", () => {
      render(<ProjectResultsContainer project={mockProjects[0]} />);
      const projectResultsContainer = screen.getByLabelText("Project results container");
      expect(projectResultsContainer).toBeInTheDocument();
   });
});
