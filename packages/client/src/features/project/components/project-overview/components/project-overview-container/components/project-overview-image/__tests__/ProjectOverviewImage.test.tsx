import { render, screen } from "@testing-library/react";
import ProjectOverviewImage from "../ProjectOverviewImage";
import { mockProjects, resetModes, setupLightMode } from "./data-utils/dataUtils";

describe("ProjectOverviewImage tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectOverviewImage wrapper element", () => {
      render(<ProjectOverviewImage project={mockProjects[0]} />);
      const ProjectOverviewImageWrapper = screen.getByLabelText("Project overview image wrapper");
      expect(ProjectOverviewImageWrapper).toBeInTheDocument();
   });

   test("renders ProjectOverviewImage container element", () => {
      render(<ProjectOverviewImage project={mockProjects[0]} />);
      const ProjectOverviewImageContainer = screen.getByLabelText("Project overview image container");
      expect(ProjectOverviewImageContainer).toBeInTheDocument();
   });

   test("renders ProjectOverviewImage container image element", () => {
      render(<ProjectOverviewImage project={mockProjects[0]} />);
      const ProjectOverviewImageContainer = screen.getByLabelText("Project overview image container");
      expect(ProjectOverviewImageContainer).toBeInTheDocument();
      const ImageElement = screen.getByAltText("Project overview image");
      expect(ProjectOverviewImageContainer).toContain(ImageElement);
   });
});
