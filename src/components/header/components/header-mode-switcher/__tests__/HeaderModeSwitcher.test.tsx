import { render, screen } from "@testing-library/react";
import HeaderModeSwitcher from "../HeaderModeSwitcher";
import { BUTTON_ARIA_LABEL_TEXT, IMAGE_ALT_TEXT } from "../data/headerModeSwitcherData";

describe("HeaderModeSwitcher component tests", () => {
   test("renders the button element with the correct aria-label", () => {
      render(<HeaderModeSwitcher />);
      const button = screen.getByRole("button", { name: BUTTON_ARIA_LABEL_TEXT });
      expect(button).toBeInTheDocument();
   });

   test("renders the image element with the correct alt text", () => {
      render(<HeaderModeSwitcher />);
      const image = screen.getByAltText(IMAGE_ALT_TEXT);
      expect(image).toBeInTheDocument();
   });
});
