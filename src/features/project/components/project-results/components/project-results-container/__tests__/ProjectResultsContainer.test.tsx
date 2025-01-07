import { render, screen } from "@testing-library/react";
import ProjectResultsContainer from "../ProjectResultsContainer";

describe("ProjectResultsContainer tests", () => {
   test("renders ProjectResultsContainer element", () => {
      render(<ProjectResultsContainer />);
      const ProjectResultsContainerElement = screen.getByLabelText("Results container");
      expect(ProjectResultsContainerElement).toBeInTheDocument();
   });
});
