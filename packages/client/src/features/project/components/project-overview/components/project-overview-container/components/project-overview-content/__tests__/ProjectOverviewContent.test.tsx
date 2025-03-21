import { render, screen } from "@testing-library/react";
import ProjectOverviewContent from "../ProjectOverviewContent";

describe("ProjectOverviewContent tests", () => {
   test("renders ProjectOverviewContent element", () => {
      render(<ProjectOverviewContent />);
      const ProjectOverviewElement = screen.getByLabelText("Project overview content");
      expect(ProjectOverviewElement).toBeInTheDocument();
   });

   test("renders Project overview subtitle", () => {
      render(<ProjectOverviewContent />);
      const ProjectOverviewSubtitle = screen.getByRole("heading", { level: 2 });
      expect(ProjectOverviewSubtitle).toBeInTheDocument();
   });

   test("renders Project overview paragraph", () => {
      render(<ProjectOverviewContent />);
      const ProjectOverviewParagraph = screen.getByRole("paragraph");
      expect(ProjectOverviewParagraph).toBeInTheDocument();
   });
});
