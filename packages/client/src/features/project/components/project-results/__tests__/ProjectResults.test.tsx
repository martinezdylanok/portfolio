import { render, screen } from "@testing-library/react";
import ProjectResults from "../ProjectResults";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectResults component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders the ProjectResults element", () => {
      render(<ProjectResults project={mockProjects[0]} />);
      const projectResults = screen.getByLabelText("Project results");
      expect(projectResults).toBeInTheDocument();
   });
});
