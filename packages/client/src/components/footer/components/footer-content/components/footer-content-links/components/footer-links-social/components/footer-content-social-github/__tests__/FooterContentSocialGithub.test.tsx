import { render, screen } from "@testing-library/react";
import FooterContentLinksSocialGithub from "../FooterContentLinksSocialGithub";
import { setupLightMode, resetModes, setupDarkMode } from "./test-utils/testUtils";

describe("FooterContentLinksSocialGithub component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders the FooterContentLinksGithub div element", () => {
      render(<FooterContentLinksSocialGithub />);
      const footerCOntentSocialGithubContainer = screen.getByLabelText("Github logo container");
      expect(footerCOntentSocialGithubContainer).toBeInTheDocument();
   });

   test("renders the FooterContentLinksGithub a element with the correct href", () => {
      render(<FooterContentLinksSocialGithub />);
      const footerContentLinksSocialGithubLink = screen.getByRole("link");
      expect(footerContentLinksSocialGithubLink).toHaveAttribute("href", "https://github.com/martinezdylanok");
      expect(footerContentLinksSocialGithubLink).toBeInTheDocument();
   });

   test("renders the FooterContentLinksGithub element", () => {
      render(<FooterContentLinksSocialGithub />);
      const footerContentLinksSocialGithub = screen.getByAltText("Github logo");
      expect(footerContentLinksSocialGithub).toBeInTheDocument();
   });

   test("renders the FooterContentLinksGithub light mode element", () => {
      render(<FooterContentLinksSocialGithub />);
      const footerContentLinksSocialGithubLightMode = screen.getByAltText("Github logo");
      expect(footerContentLinksSocialGithubLightMode).toHaveAttribute("src", " /footer/github_logo_dark_mode.svg");
   });

   test("renders the FooterContentLinksGithub dark mode element", () => {
      setupDarkMode();
      render(<FooterContentLinksSocialGithub />);
      const footerContentLinksSocialGithubDarkMode = screen.getByAltText("Github logo");
      expect(footerContentLinksSocialGithubDarkMode).toHaveAttribute("src", " /footer/github_logo_light_mode.svg");
   });
});
