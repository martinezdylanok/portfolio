import { render, screen } from "@testing-library/react";
import FooterContentSocial from "../FooterContentSocial";

describe("FooterContentSocial tests", () => {
   test("renders FooterContentSocial element", () => {
      render(<FooterContentSocial />);
      const FooterContentSocialElement = screen.getByLabelText("Footer social container");
      expect(FooterContentSocialElement).toBeInTheDocument();
   });
});
