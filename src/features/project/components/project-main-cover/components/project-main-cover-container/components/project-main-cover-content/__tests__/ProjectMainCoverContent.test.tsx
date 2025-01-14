import { render, screen } from "@testing-library/react";
import ProjectMainCoverContent from "../ProjectMainCoverContent";

describe("ProjectMainCoverContent tests", () => {
   test("render ProjectMainCoverContent element", () => {
      render(<ProjectMainCoverContent />);
      const mainCoverContent = screen.getByLabelText("Project main cover content");
      expect(mainCoverContent).toBeInTheDocument();
   });

   test("render the main cover subtitle element", () => {
      render(<ProjectMainCoverContent />);
      const mainCoverSubtitle = screen.getByRole("heading", { level: 3 });
      expect(mainCoverSubtitle).toHaveClass("main-cover__project-title");
      expect(mainCoverSubtitle).toBeInTheDocument();
   });

   test("render the main cover project description element", () => {
      render(<ProjectMainCoverContent />);
      const mainCoverProjectDescription = screen.getByRole("paragraph");
      expect(mainCoverProjectDescription).toHaveClass("main-cover__project-description");
      expect(mainCoverProjectDescription).toBeInTheDocument();
   });
});
