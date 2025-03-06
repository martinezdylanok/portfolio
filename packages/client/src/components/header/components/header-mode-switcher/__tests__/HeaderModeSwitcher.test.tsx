import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import HeaderModeSwitcher from "../HeaderModeSwitcher";
import { BUTTON_ARIA_LABEL_TEXT, LIGHT_MODE_ALT_TEXT, DARK_MODE_ALT_TEXT, RETRO_MODE_ALT_TEXT } from "../data/headerModeSwitcherData";
import { setupLightMode, setupDarkMode, resetModes } from "./test-utils/test-utils";

describe("HeaderModeSwitcher component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterEach(() => {
      resetModes();
   });

   test("renders the button element with the correct aria-label", () => {
      render(<HeaderModeSwitcher />);
      const button = screen.getByRole("button", { name: BUTTON_ARIA_LABEL_TEXT });
      expect(button).toBeInTheDocument();
   });

   test("renders both image elements using the image role", () => {
      render(<HeaderModeSwitcher />);
      const images = screen.getAllByRole("img");
      expect(images).toHaveLength(2);
   });

   test("renders the light mode image with the correct alt text", () => {
      render(<HeaderModeSwitcher />);
      const lightModeImage = screen.getByAltText(LIGHT_MODE_ALT_TEXT);
      expect(lightModeImage).toBeInTheDocument();
   });

   test("renders the dark mode image with the correct alt text", () => {
      setupDarkMode();
      render(<HeaderModeSwitcher />);
      const darkModeImage = screen.getByAltText(DARK_MODE_ALT_TEXT);
      expect(darkModeImage).toBeInTheDocument();
   });

   test("renders the retro mode image with the correct alt text", () => {
      render(<HeaderModeSwitcher />);
      const retroModeImage = screen.getByAltText(RETRO_MODE_ALT_TEXT);
      expect(retroModeImage).toBeInTheDocument();
   });
});
