import { render, screen } from "@testing-library/react";
import ProjectOverviewTechnologies from "../ProjectOverviewTechnologies";

describe("ProjectOverviewTechnologies tests", () => {
   test("renders ProjectOverviewTechnoligies element", () => {
      render(<ProjectOverviewTechnologies />);
      const element = screen.getByLabelText("Project overview technologies");
      expect(element).toBeInTheDocument();
   });

   test("renders ProjectOverviewTechnoligies title element", () => {
      render(<ProjectOverviewTechnologies />);
      const subtitle = screen.getByRole("heading");
      expect(subtitle).toBeInTheDocument();
   });

   test("renders ProjectOverviewTechnoligies list element", () => {
      render(<ProjectOverviewTechnologies />);
      const list = screen.getByRole("list");
      expect(list).toBeInTheDocument();
   });
});
