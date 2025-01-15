import { render, screen } from "@testing-library/react";
import Project from "../Project";

describe("Project component tests", () => {
   test("renders Project element", () => {
      render(<Project />);
      const projectElement = screen.getByLabelText("Project container");
      expect(projectElement).toBeInTheDocument();
   });

   test("renders project main cover", () => {
      render(<Project />);
      const projectMainCover = screen.getByRole("region", { name: /main cover/i });
      expect(projectMainCover).toBeInTheDocument();
   });

   test("renders project overview", () => {
      render(<Project />);
      const projectOverview = screen.getByRole("region", { name: /project overview/i });
      expect(projectOverview).toBeInTheDocument();
   });

   test("renders project results", () => {
      render(<Project />);
      const projectResults = screen.getByRole("region", { name: /project results/i });
      expect(projectResults).toBeInTheDocument();
   });
});
