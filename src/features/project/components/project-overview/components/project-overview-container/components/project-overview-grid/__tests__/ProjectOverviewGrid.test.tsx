import { render, screen } from "@testing-library/react";
import ProjectOverviewGrid from "../ProjectOverviewGrid";

describe("ProjectOverviewGrid tests", () => {
   test("renders ProjectOverviewGrid element", () => {
      render(<ProjectOverviewGrid />);
      const gridElement = screen.getByLabelText("Project overview grid");
      expect(gridElement).toBeInTheDocument();
   });
});
