import { render, screen } from "@testing-library/react";
import ProjectMainCoverContent from "../ProjectMainCoverContent";

describe("ProjectMainCoverContent tests", () => {
   test("render the main cover content", () => {
      render(<ProjectMainCoverContent />);
      const mainCoverContent = screen.getByLabelText("Main cover content");
      expect(mainCoverContent).toBeInTheDocument();
   });

   test("render the main cover subtitle", () => {
      render(<ProjectMainCoverContent />);
      const mainCoverSubtitle = screen.getByRole("heading", { level: 3 });
      expect(mainCoverSubtitle).toHaveClass("main-cover__subtitle");
      expect(mainCoverSubtitle).toBeInTheDocument();
   });

   test("render the main cover title", () => {
      render(<ProjectMainCoverContent />);
      const mainCoverTitle = screen.getByRole("heading", { level: 2 });
      expect(mainCoverTitle).toHaveClass("main-cover__title");
      expect(mainCoverTitle).toBeInTheDocument();
   });

   test("render the main cover project description", () => {
      render(<ProjectMainCoverContent />);
      const mainCoverProjectDescription = screen.getByRole("paragraph");
      expect(mainCoverProjectDescription).toHaveClass("main-cover__project-description");
      expect(mainCoverProjectDescription).toBeInTheDocument();
   });
});
