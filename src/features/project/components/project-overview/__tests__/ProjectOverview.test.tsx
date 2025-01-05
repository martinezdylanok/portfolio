import { render, screen } from "@testing-library/react";
import ProjectOverview from "../ProjectOverview";

describe("ProjectOverview component tests", () => {
   test("renders the ProjectOverview element", () => {
      render(<ProjectOverview />);
      const projectOverview = screen.getByLabelText("Project overview");
      expect(projectOverview).toBeInTheDocument();
   });
});
