import { render, screen } from "@testing-library/react";
import ProjectResultsContainer from "../ProjectResultsContainer";

describe("ProjectResultsContainer tests", () => {
   test("renders ProjectResultsContainer element", () => {
      render(<ProjectResultsContainer />);
      const ProjectResultsContainerElement = screen.getByLabelText("Project results container");
      expect(ProjectResultsContainerElement).toBeInTheDocument();
   });
});
