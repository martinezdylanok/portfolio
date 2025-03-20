import { render, screen } from "@testing-library/react";
import ContactFormSelector from "../ContactFormSelector";
import { setupLightMode, resetModes, mockHandleActiveStateChange, defaultProps } from "./test-utils/testUtils";

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

   test("renders ContactFormSelector element", () => {
      render(<ContactFormSelector {...defaultProps} />);
      const element = screen.getByLabelText("Contact form selector");
      expect(element).toBeInTheDocument();
   });

   test("renders ContactFormSelector first element", () => {
      render(<ContactFormSelector {...defaultProps} />);
      const element = screen.getByLabelText("Contact form first selector");
      expect(element).toBeInTheDocument();
   });

   test("renders ContactFormSelector first element's h2 element", () => {
      render(<ContactFormSelector {...defaultProps} />);
      const element = screen.getByRole("heading", { name: "CONTACT", level: 2 });
      expect(element).toBeInTheDocument();
   });

   test("renders ContactFormSelector second element", () => {
      render(<ContactFormSelector {...defaultProps} />);
      const element = screen.getByLabelText("Contact form second selector");
      expect(element).toBeInTheDocument();
   });

   test("renders ContactFormSelector second element's h2 element", () => {
      render(<ContactFormSelector {...defaultProps} />);
      const element = screen.getByRole("heading", { name: "JOB OFFER", level: 2 });
      expect(element).toBeInTheDocument();
   });
});
