import { render, screen } from "@testing-library/react";
import HeaderLogo from "../HeaderLogo";
import { LOGO_CONTAINER_ARIA_LABEL, LOGO_IMAGE_ALT_TEXT } from "../data/headerLogoConstants";

describe("HeaderLogo Component tests", () => {
   test("renders logo container with correct aria label", () => {
      render(<HeaderLogo />);
      const logoContainer = screen.getByLabelText(LOGO_CONTAINER_ARIA_LABEL);
      expect(logoContainer).toBeInTheDocument();
   });

   test("renders link element with correct role", () => {
      render(<HeaderLogo />);
      const logoLink = screen.getByRole("link");
      expect(logoLink).toBeInTheDocument();
   });

   test("renders image element with correct alt text", () => {
      render(<HeaderLogo />);
      const logoImage = screen.getByAltText(LOGO_IMAGE_ALT_TEXT);
      expect(logoImage).toBeInTheDocument();
   });
});
