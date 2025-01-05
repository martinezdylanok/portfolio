import { render, screen } from "@testing-library/react";
import ProjectOverviewDocumentation from "../ProjectOverviewDocumentation";

describe("ProjectOverviewDocumentation tests", () => {
   test("renders ProjectOverviewDocumentation element", () => {
      render(<ProjectOverviewDocumentation />);
      const element = screen.getByLabelText("Project overview documentation");
      expect(element).toBeInTheDocument();
   });

   test("renders ProjectOverviewDocumentation link", () => {
      render(<ProjectOverviewDocumentation />);
      const link = screen.getByLabelText("Documentation link");
      expect(link).toBeInTheDocument();
   });

   test("renders ProjectOverviewDocumentation link text", () => {
      render(<ProjectOverviewDocumentation />);
      const linkText = screen.getByRole("heading", { name: "Documentation" });
      expect(linkText).toBeInTheDocument();
   });
});
