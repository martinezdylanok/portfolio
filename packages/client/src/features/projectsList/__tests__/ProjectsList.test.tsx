import { render, screen } from "@testing-library/react";
import ProjectsList from "../ProjectsList";

describe("ProjectsList component tests", () => {
   test("renders ProjectsList element", () => {
      render(<ProjectsList />);
      const projectsList = screen.getByRole("main");
      expect(projectsList).toBeInTheDocument();
   });

   test("renders the projects list title", () => {
      render(<ProjectsList />);
      const title = screen.getByRole("heading", { name: /some of my work/i });
      expect(title).toBeInTheDocument();
   });

   test("renders the projects list container", () => {
      render(<ProjectsList />);
      const list = screen.getByLabelText("Projects list container");
      expect(list).toBeInTheDocument();
   });

   test("renders the projects list", () => {
      render(<ProjectsList />);
      const projectsList = screen.getByRole("list");
      expect(projectsList).toBeInTheDocument();
   });

   test("renders the projects list items", () => {
      render(<ProjectsList />);
      const listItems = screen.getAllByRole("listitem");
      expect(listItems).toHaveLength(5);
   });
});
