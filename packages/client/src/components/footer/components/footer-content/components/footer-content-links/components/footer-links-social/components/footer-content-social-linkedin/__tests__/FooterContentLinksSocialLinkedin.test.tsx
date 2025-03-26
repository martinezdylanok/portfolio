import { render, screen } from "@testing-library/react";
import FooterContentLinksSocialLinkedin from "../FooterContentLinksSocialLinkedin";
import { setupLightMode, resetModes, setupDarkMode } from "./test-utils/testUtils";

describe("FooterContentLinksSocialLinkedin component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders the FooterContentLinksLinkedin div element", () => {
      render(<FooterContentLinksSocialLinkedin />);
      const footerCOntentSocialLinkedinContainer = screen.getByLabelText("Linkedin logo container");
      expect(footerCOntentSocialLinkedinContainer).toBeInTheDocument();
   });

   test("renders the FooterContentLinksLinkedin a element", () => {
      render(<FooterContentLinksSocialLinkedin />);
      const footerContentLinksSocialLinkedinLink = screen.getByRole("link");
      expect(footerContentLinksSocialLinkedinLink).toBeInTheDocument();
   });

   test("renders the FooterContentLinksLinkedin element", () => {
      render(<FooterContentLinksSocialLinkedin />);
      const footerContentLinksSocialLinkedin = screen.getByAltText("Linkedin logo");
      expect(footerContentLinksSocialLinkedin).toBeInTheDocument();
   });

   test("renders the FooterContentLinksLinkedin light mode element", () => {
      render(<FooterContentLinksSocialLinkedin />);
      const footerContentLinksSocialLinkedinLightMode = screen.getByAltText("Linkedin logo");
      expect(footerContentLinksSocialLinkedinLightMode).toHaveAttribute("src", " /footer/linkedin_logo_dark_mode.svg");
   });

   test("renders the FooterContentLinksLinkedin dark mode element", () => {
      setupDarkMode();
      render(<FooterContentLinksSocialLinkedin />);
      const footerContentLinksSocialLinkedinDarkMode = screen.getByAltText("Linkedin logo");
      expect(footerContentLinksSocialLinkedinDarkMode).toHaveAttribute("src", " /footer/linkedin_logo_light_mode.svg");
   });
});
