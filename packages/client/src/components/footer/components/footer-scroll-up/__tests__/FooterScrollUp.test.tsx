import { render, screen } from "@testing-library/react";
import FooterScrollUp from "../FooterScrollUp";

describe("FooterScrollUp tests", () => {
   test("renders FooterScrollUp element", () => {
      render(<FooterScrollUp />);
      const FooterScrollUpElement = screen.getByLabelText("Footer scroll up container");
      expect(FooterScrollUpElement).toBeInTheDocument();
   });

   test("renders FooterScrollUp link", () => {
      render(<FooterScrollUp />);
      const FooterScrollUpLink = screen.getByRole("link");
      expect(FooterScrollUpLink).toBeInTheDocument();
   });

   test("renders FooterScrollUp arrow icon", () => {
      render(<FooterScrollUp />);
      const FooterScrollUpArrowIcon = screen.getByAltText("Arrow icon");
      expect(FooterScrollUpArrowIcon).toBeInTheDocument();
   });

   test("renders FooterScrollUp text", () => {
      render(<FooterScrollUp />);
      const FooterScrollUpText = screen.getByText("Scroll up");
      expect(FooterScrollUpText).toBeInTheDocument();
   });
});
