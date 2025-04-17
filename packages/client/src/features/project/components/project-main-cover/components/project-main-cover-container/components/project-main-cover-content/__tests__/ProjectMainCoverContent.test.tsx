import { render, screen } from "@testing-library/react";
import ProjectMainCoverContent from "../ProjectMainCoverContent";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectMainCoverContent component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectMainCoverContent element", () => {
      render(<ProjectMainCoverContent project={mockProjects[0]} />);
      const mainCoverContainer = screen.getByLabelText("Project main cover content");
      expect(mainCoverContainer).toBeInTheDocument();
   });

   test("renders the first part of a project name correctly", () => {
      render(<ProjectMainCoverContent project={mockProjects[0]} />);
      const firstPartNameElement = screen.getByTestId("First part name");
      expect(firstPartNameElement).toBeInTheDocument();
   });

   test("renders the second part of a project name correctly", () => {
      render(<ProjectMainCoverContent project={mockProjects[1]} />);
      const firstPartNameElement = screen.getByTestId("First part name");
      expect(firstPartNameElement).toBeInTheDocument();
      const secondPartNameElement = screen.getByTestId("Second part name");
      expect(secondPartNameElement).toBeInTheDocument();
   });

   test("does not renders the second part of a project name if not present", () => {
      render(<ProjectMainCoverContent project={mockProjects[0]} />);
      const firstPartNameElement = screen.getByTestId("First part name");
      expect(firstPartNameElement).toBeInTheDocument();
      const secondPartNameElement = screen.queryByTestId("Second part name");
      expect(secondPartNameElement).not.toBeInTheDocument();
   });

   test("renders the description of a project correctly", () => {
      render(<ProjectMainCoverContent project={mockProjects[0]} />);
      const projectDescription = screen.getByTestId("Project description");
      expect(projectDescription).toBeInTheDocument();
      expect(projectDescription).toHaveTextContent("Description 1");
   });
});
