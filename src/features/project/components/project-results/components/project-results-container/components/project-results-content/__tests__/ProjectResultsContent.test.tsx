import { render, screen } from "@testing-library/react";
import ProjectResultsContent from "../ProjectResultsContent";

describe("ProjectResultsContent tests", () => {
   test("renders ProjectResultsContent element", () => {
      render(<ProjectResultsContent />);
      const ProjectResultsElement = screen.getByLabelText("Project results content");
      expect(ProjectResultsElement).toBeInTheDocument();
   });

   test("renders Project results subtitle", () => {
      render(<ProjectResultsContent />);
      const ProjectResultsSubtitle = screen.getByRole("heading", { name: "Final results", level: 2 });
      expect(ProjectResultsSubtitle).toBeInTheDocument();
   });

   test("renders Project results paragraph", () => {
      render(<ProjectResultsContent />);
      const ProjectResultsParagraph = screen.getByRole("paragraph");
      expect(ProjectResultsParagraph).toBeInTheDocument();
   });
});
