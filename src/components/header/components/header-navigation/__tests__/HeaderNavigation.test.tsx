import { render, screen } from "@testing-library/react";
import HeaderNavigation from "../HeaderNavigation";
import { NAV_ARIA_LABEL_TEXT, PROJECT_TEMPORAL_NAMES } from "../data/headerNavigationData";

describe("HeaderNavigation Component tests", () => {
   test("renders the navigation with the correct aria-label", () => {
      render(<HeaderNavigation />);
      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();
   });

   test("renders the correct number of project links elements", () => {
      render(<HeaderNavigation />);
      const projectLinks = screen.getAllByRole("link");
      expect(projectLinks).toHaveLength(PROJECT_TEMPORAL_NAMES.length);
   });

   test("renders project links elements with correct names", () => {
      render(<HeaderNavigation />);
      PROJECT_TEMPORAL_NAMES.forEach((project) => {
         const linkElement = screen.getByText(project.name);
         expect(linkElement).toBeInTheDocument();
      });
   });
});
