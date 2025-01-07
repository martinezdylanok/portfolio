import { render, screen } from "@testing-library/react";
import ProjectRelated from "../ProjectRelated";

describe("ProjectRelated component tests", () => {
   test("renders ProjectRelated element", () => {
      render(<ProjectRelated />);
      const element = screen.getByLabelText("Related projects");
      expect(element).toBeInTheDocument();
   });
});
