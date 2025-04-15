import { render, screen } from "@testing-library/react";
import ProjectRelatedContainerProjects from "../ProjectRelatedContainerProjects";

describe("ProjectRelatedContainerProjects tests", () => {
   test("renders ProjectRelatedContainerProjects element", () => {
      render(<ProjectRelatedContainerProjects />);
      const element = screen.getByLabelText("Related projects container videos");
      expect(element).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerProjects list", () => {
      render(<ProjectRelatedContainerProjects />);
      const list = screen.getByRole("list");
      expect(list).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerProjects list items", () => {
      render(<ProjectRelatedContainerProjects />);
      const items = screen.getAllByRole("listitem");
      expect(items).toHaveLength(3);
   });
});
