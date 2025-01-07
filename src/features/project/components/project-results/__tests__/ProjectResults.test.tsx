import { render, screen } from "@testing-library/react";
import ProjectResults from "../ProjectResults";

describe("ProjectResults component tests", () => {
   test("renders the ProjectResults element", () => {
      render(<ProjectResults />);
      const projectResults = screen.getByLabelText("Project results");
      expect(projectResults).toBeInTheDocument();
   });
});
