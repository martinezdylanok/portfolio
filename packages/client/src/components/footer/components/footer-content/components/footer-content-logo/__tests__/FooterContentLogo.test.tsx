import { render, screen } from "@testing-library/react";
import FooterContentLogo from "../FooterContentLogo";
import { setupLightMode, resetModes, setupDarkMode } from "./test-utils/test-utils";

describe("FooterContentLogo tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders FooterContentLogo element", () => {
      render(<FooterContentLogo />);
      const FooterContentLogoElement = screen.getByLabelText("Footer content logo container");
      expect(FooterContentLogoElement).toBeInTheDocument();
   });

   test("renders FooterContentLogo image", () => {
      render(<FooterContentLogo />);
      const FooterContentLogoImage = screen.getByAltText("Dylan Martinez's logo");
      expect(FooterContentLogoImage).toBeInTheDocument();
   });

   test("renders FooterContentLogo image in light mode", () => {
      render(<FooterContentLogo />);
      const FooterContentLogoImage = screen.getByAltText("Dylan Martinez's logo");
      expect(FooterContentLogoImage).toHaveAttribute("src", "/footer/dm_logo_light_mode.svg");
   });

   test("renders FooterContentLogo image in dark mode", () => {
      setupDarkMode();
      render(<FooterContentLogo />);
      const FooterContentLogoImage = screen.getByAltText("Dylan Martinez's logo");
      expect(FooterContentLogoImage).toHaveAttribute("src", "/footer/dm_logo_dark_mode.svg");
   });
});
