import { render, screen } from "@testing-library/react";
import FooterCallToAction from "../FooterCallToAction";

describe("FooterCallToAction tests", () => {
   test("renders FooterCallToAction element", () => {
      render(<FooterCallToAction />);
      const FooterCallToActionElement = screen.getByLabelText("Footer call to action");
      expect(FooterCallToActionElement).toBeInTheDocument();
   });

   test("renders FooterCallToAction link", () => {
      render(<FooterCallToAction />);
      const FooterCallToActionLink = screen.getByRole("link");
      expect(FooterCallToActionLink).toBeInTheDocument();
   });

   test("renders FooterCallToAction text", () => {
      render(<FooterCallToAction />);
      const FooterCallToActionText = screen.getByText("Get this template");
      expect(FooterCallToActionText).toBeInTheDocument();
   });
});
