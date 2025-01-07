import { render, screen } from "@testing-library/react";
import ProjectFeatures from "../ProjectFeatures";

describe("ProjectFeatures component tests", () => {
   test("renders the ProjectFeatures element", () => {
      render(<ProjectFeatures />);
      const projectFeatures = screen.getByLabelText("Project features");
      expect(projectFeatures).toBeInTheDocument();
   });
});
