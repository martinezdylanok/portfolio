import { render, screen } from "@testing-library/react";
import FooterContentLogo from "../FooterContentLogo";

describe("FooterContentLogo tests", () => {
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
});
