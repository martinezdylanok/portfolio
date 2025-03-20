import { render, screen } from "@testing-library/react";
import ContactFormActualForm from "../ContactFormActualForm";
import { setupLightMode, resetModes, mockHandleActiveStateChange, defaultProps } from "./test-utils/testUtils";

describe("ContactFormActualForm tests", () => {
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

   test("renders ContactFormActualForm contact form element", () => {
      render(<ContactFormActualForm {...defaultProps} />);
      const contactFormActualFormElement = screen.getByRole("form", { name: "Contact form" });
      expect(contactFormActualFormElement).toBeInTheDocument();
   });

   test("renders name input field element in the contact form", () => {
      render(<ContactFormActualForm {...defaultProps} />);
      const contactFormActualFormElement = screen.getByRole("form", { name: "Contact form" });
      const nameInput = contactFormActualFormElement.querySelector("input[type='text']");
      expect(nameInput).toContainHTML("NAME");
      expect(nameInput).toBeInTheDocument();
   });

   test("renders phone input field element in the contact form", () => {
      render(<ContactFormActualForm {...defaultProps} />);
      const contactFormActualFormElement = screen.getByRole("form", { name: "Contact form" });
      const phoneInput = contactFormActualFormElement.querySelector("input[type='tel']");
      expect(phoneInput).toContainHTML("PHONE NUMBER");
      expect(phoneInput).toBeInTheDocument();
   });

   test("renders email input field element in the contact form", () => {
      render(<ContactFormActualForm {...defaultProps} />);
      const contactFormActualFormElement = screen.getByRole("form", { name: "Contact form" });
      const emailInput = contactFormActualFormElement.querySelector("input[type='email']");
      expect(emailInput).toContainHTML("EMAIL");
      expect(emailInput).toBeInTheDocument();
   });

   test("renders message textarea field element in the contact form", () => {
      render(<ContactFormActualForm {...defaultProps} />);
      const contactFormActualFormElement = screen.getByRole("form", { name: "Contact form" });
      const textArea = contactFormActualFormElement.querySelector("textarea");
      expect(textArea).toContainHTML("MESSAGE");
      expect(textArea).toBeInTheDocument();
   });

   test("renders submit button element in the contact form", () => {
      render(<ContactFormActualForm {...defaultProps} />);
      const contactFormActualFormElement = screen.getByRole("form", { name: "Contact form" });
      const button = contactFormActualFormElement.querySelector("button");
      expect(button).toHaveAttribute("type", "submit");
      expect(button).toBeInTheDocument();
   });

   test("renders ContactFormActualForm job offer element", () => {
      render(<ContactFormActualForm {...defaultProps} />);
      const contactFormActualFormElement = screen.getByRole("form", { name: "Job offer form" });
      expect(contactFormActualFormElement).toBeInTheDocument();
   });

   test("renders job offer text element in the job offer form", () => {
      render(<ContactFormActualForm {...defaultProps} />);
      const jobOfferText = screen.getByText(/IF YOU FIND MY WORK INTERESTING/);
      expect(jobOfferText).toBeInTheDocument();
   });

   test("renders name input field element in the job offer form", () => {
      render(<ContactFormActualForm {...defaultProps} />);
      const contactFormActualFormElement = screen.getByRole("form", { name: "Job offer form" });
      const nameInput = contactFormActualFormElement.querySelector("input[type='text']");
      expect(nameInput).toContainHTML("NAME");
      expect(nameInput).toBeInTheDocument();
   });

   test("renders phone input field element in the job offer form", () => {
      render(<ContactFormActualForm {...defaultProps} />);
      const contactFormActualFormElement = screen.getByRole("form", { name: "Job offer form" });
      const phoneInput = contactFormActualFormElement.querySelector("input[type='tel']");
      expect(phoneInput).toContainHTML("PHONE NUMBER");
      expect(phoneInput).toBeInTheDocument();
   });

   test("renders email input field element in the job offer form", () => {
      render(<ContactFormActualForm {...defaultProps} />);
      const contactFormActualFormElement = screen.getByRole("form", { name: "Job offer form" });
      const emailInput = contactFormActualFormElement.querySelector("input[type='email']");
      expect(emailInput).toContainHTML("EMAIL");
      expect(emailInput).toBeInTheDocument();
   });

   test("renders message textarea field element in the job offer form", () => {
      render(<ContactFormActualForm {...defaultProps} />);
      const contactFormActualFormElement = screen.getByRole("form", { name: "Job offer form" });
      const textArea = contactFormActualFormElement.querySelector("textarea");
      expect(textArea).toContainHTML("MESSAGE");
      expect(textArea).toBeInTheDocument();
   });

   test("renders submit button element in the job offer form", () => {
      render(<ContactFormActualForm {...defaultProps} />);
      const contactFormActualFormElement = screen.getByRole("form", { name: "Job offer form" });
      const button = contactFormActualFormElement.querySelector("button");
      expect(button).toHaveAttribute("type", "submit");
      expect(button).toBeInTheDocument();
   });
});
