import { render, screen } from "@testing-library/react";
import ProjectRelatedContainer from "../ProjectRelatedContainer";

describe("ProjectRelatedContainer tests", () => {
   test("renders ProjectRelatedContainer element", () => {
      render(<ProjectRelatedContainer />);
      const containerElement = screen.getByLabelText("Related projects container");
      expect(containerElement).toBeInTheDocument();
   });
});
