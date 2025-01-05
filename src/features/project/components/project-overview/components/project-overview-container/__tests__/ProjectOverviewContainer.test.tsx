import { render, screen } from "@testing-library/react";
import ProjectOverviewContainer from "../ProjectOverviewContainer";

describe("ProjectOverviewContainer tests", () => {
   test("renders ProjectOverviewContainer element", () => {
      render(<ProjectOverviewContainer />);
      const ProjectOverviewContainerElement = screen.getByLabelText("Overview container");
      expect(ProjectOverviewContainerElement).toBeInTheDocument();
   });
});
