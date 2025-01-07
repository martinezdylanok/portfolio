import { render, screen } from "@testing-library/react";
import ProjectRelatedContainerContent from "../ProjectRelatedContainerContent";

describe("ProjectRelatedContainerContent tests", () => {
   test("renders ProjectRelatedContainerContent element", () => {
      render(<ProjectRelatedContainerContent />);
      const element = screen.getByLabelText("Related projects container content");
      expect(element).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerContent title", () => {
      render(<ProjectRelatedContainerContent />);
      const title = screen.getByRole("heading", { level: 2, name: "Other projects" });
      expect(title).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerContent subtitle", () => {
      render(<ProjectRelatedContainerContent />);
      const subtitle = screen.getByRole("heading", { level: 3, name: "See all" });
      expect(subtitle).toBeInTheDocument();
   });
});
