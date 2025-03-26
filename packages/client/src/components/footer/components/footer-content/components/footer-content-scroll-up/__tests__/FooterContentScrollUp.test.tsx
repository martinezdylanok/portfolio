import { render, screen } from "@testing-library/react";
import FooterScrollUp from "../FooterContentScrollUp";
import { setupLightMode, resetModes, setupDarkMode } from "./test-utils/testUtils";

describe("FooterScrollUp tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders FooterScrollUp element", () => {
      render(<FooterScrollUp />);
      const FooterScrollUpElement = screen.getByLabelText("Footer scroll up container");
      expect(FooterScrollUpElement).toBeInTheDocument();
   });

   test("renders FooterScrollUp link element", () => {
      render(<FooterScrollUp />);
      const FooterScrollUpLink = screen.getByRole("link");
      expect(FooterScrollUpLink).toHaveAttribute("href", "#top");
      expect(FooterScrollUpLink).toBeInTheDocument();
   });

   test("renders FooterScrollUp span element", () => {
      render(<FooterScrollUp />);
      const FooterScrollUpText = screen.getByText("Back to the top");
      expect(FooterScrollUpText).toBeInTheDocument();
   });

   test("renders FooterScrollUp text color in light mode", () => {
      render(<FooterScrollUp />);
      const FooterScrollUpText = screen.getByText("Back to the top");
      expect(FooterScrollUpText).toHaveStyle({ color: "EDF2FB" });
   });

   test("renders FooterScrollUp text color in dark mode", () => {
      setupDarkMode();
      render(<FooterScrollUp />);
      const FooterScrollUpText = screen.getByText("Back to the top");
      expect(FooterScrollUpText).toHaveStyle({ color: "ABC4FF" });
   });

   test("renders FooterScrollUp arrow icon", () => {
      render(<FooterScrollUp />);
      const FooterScrollUpArrowIcon = screen.getByAltText("Arrow icon");
      expect(FooterScrollUpArrowIcon).toBeInTheDocument();
   });

   test("renders FooterScrollUp arrow icon in light mode", () => {
      render(<FooterScrollUp />);
      const FooterScrollUpArrowIcon = screen.getByAltText("Arrow icon");
      expect(FooterScrollUpArrowIcon).toHaveAttribute("src", " ./footer/arrow_icon_dark_mode.svg");
   });

   test("renders FooterScrollUp arrow icon in dark mode", () => {
      setupDarkMode();
      render(<FooterScrollUp />);
      const FooterScrollUpArrowIcon = screen.getByAltText("Arrow icon");
      expect(FooterScrollUpArrowIcon).toHaveAttribute("src", " ./footer/arrow_icon_light_mode.svg");
   });
});
