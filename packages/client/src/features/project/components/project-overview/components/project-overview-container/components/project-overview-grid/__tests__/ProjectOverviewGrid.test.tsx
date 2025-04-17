import { render, screen } from "@testing-library/react";
import ProjectOverviewGrid from "../ProjectOverviewGrid";
import { mockProjects, resetModes, setupLightMode } from "./data-utils/dataUtils";

describe("ProjectOverviewGrid tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectOverviewGrid element", () => {
      render(<ProjectOverviewGrid project={mockProjects[0]} />);
      const gridElement = screen.getByLabelText("Project overview grid");
      expect(gridElement).toBeInTheDocument();
   });

   test("renders a divider that is aria-hidden", () => {
      render(<ProjectOverviewGrid project={mockProjects[0]} />);
      const divider = screen.getByTestId("divider");
      expect(divider).toHaveAttribute("aria-hidden", "true");
      expect(divider).toBeInTheDocument();
   });
});
