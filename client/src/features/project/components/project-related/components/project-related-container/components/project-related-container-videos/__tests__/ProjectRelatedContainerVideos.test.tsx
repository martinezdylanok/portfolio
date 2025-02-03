import { render, screen } from "@testing-library/react";
import ProjectRelatedContainerVideos from "../ProjectRelatedContainerVideos";

describe("ProjectRelatedContainerVideos tests", () => {
   test("renders ProjectRelatedContainerVideos element", () => {
      render(<ProjectRelatedContainerVideos />);
      const element = screen.getByLabelText("Related projects container videos");
      expect(element).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerVideos list", () => {
      render(<ProjectRelatedContainerVideos />);
      const list = screen.getByRole("list");
      expect(list).toBeInTheDocument();
   });

   test("renders ProjectRelatedContainerVideos list items", () => {
      render(<ProjectRelatedContainerVideos />);
      const items = screen.getAllByRole("listitem");
      expect(items).toHaveLength(3);
   });
});
