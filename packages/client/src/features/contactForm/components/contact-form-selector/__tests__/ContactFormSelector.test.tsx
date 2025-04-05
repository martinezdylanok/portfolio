import { render, screen } from "@testing-library/react";
import ContactFormSelector from "../ContactFormSelector";
import { setupLightMode, resetModes, mockHandleActiveStateChange, user } from "./test-utils/testUtils";

describe("ContactFormSelector tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
      mockHandleActiveStateChange.mockClear();
   });

   afterAll(() => {
      resetModes();
   });

   test("should render ContactFormSelector selector element", () => {
      render(<ContactFormSelector activeForm="firstForm" handleActiveFormUpdate={mockHandleActiveStateChange} />);
      const selectorElement = screen.getByLabelText("Contact form selector");
      expect(selectorElement).toBeInTheDocument();
   });

   test("should render ContactFormSelector first selector button by default", () => {
      render(<ContactFormSelector activeForm="firstForm" handleActiveFormUpdate={mockHandleActiveStateChange} />);
      const firstSelectorButton = screen.getByLabelText("Contact form first selector");
      expect(firstSelectorButton).toHaveAttribute("aria-disabled", "false");
      expect(firstSelectorButton).toBeInTheDocument();
   });

   test("should render ContactFormSelector first element's h2 element", () => {
      render(<ContactFormSelector activeForm="firstForm" handleActiveFormUpdate={mockHandleActiveStateChange} />);
      const firstSelectorButton = screen.getByLabelText("Contact form first selector");
      const h2Element = firstSelectorButton.querySelector("h2");
      expect(h2Element).toHaveAttribute("data-is-active", "true");
      expect(h2Element).toHaveTextContent("CONTACT");
      expect(h2Element).toBeInTheDocument();
   });

   test("should render ContactFormSelector second element after clicking on it", async () => {
      const { rerender } = render(<ContactFormSelector activeForm="firstForm" handleActiveFormUpdate={mockHandleActiveStateChange} />);
      const firstSelectorButton = screen.getByLabelText("Contact form first selector");
      expect(firstSelectorButton).toHaveAttribute("aria-disabled", "false");
      expect(firstSelectorButton).toBeInTheDocument();
      const secondSelectorButton = screen.getByLabelText("Contact form second selector");
      expect(secondSelectorButton).toHaveAttribute("aria-disabled", "true");
      expect(secondSelectorButton).toBeInTheDocument();
      await user.click(secondSelectorButton);
      expect(mockHandleActiveStateChange).toHaveBeenCalledWith("secondForm");
      rerender(<ContactFormSelector activeForm="secondForm" handleActiveFormUpdate={mockHandleActiveStateChange} />);
      expect(firstSelectorButton).toHaveAttribute("aria-disabled", "true");
      expect(secondSelectorButton).toHaveAttribute("aria-disabled", "false");
   });

   test("should render ContactFormSelector second element's h2 element", () => {
      render(<ContactFormSelector activeForm="secondForm" handleActiveFormUpdate={mockHandleActiveStateChange} />);
      const firstSelectorButton = screen.getByLabelText("Contact form second selector");
      const h2Element = firstSelectorButton.querySelector("h2");
      expect(h2Element).toHaveAttribute("data-is-active", "true");
      expect(h2Element).toHaveTextContent("JOB OFFER");
      expect(h2Element).toBeInTheDocument();
   });
});
