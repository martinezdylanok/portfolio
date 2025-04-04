import { render, screen } from "@testing-library/react";
import ContactFormJob from "../ContactFormJob";
import { setupLightMode, resetModes, user } from "./test-utils/testUtils";

describe("ContactFormJob tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("not renders ContactFormJob component if it is not active", () => {
      render(<ContactFormJob activeForm="firstForm" />);
      const contactFormJob = screen.getByLabelText("Job offer form");
      expect(contactFormJob).toHaveAttribute("aria-disabled", "true");
      expect(contactFormJob).toBeInTheDocument();
   });

   test("renders ContactFormJob component if it is active", () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactFormJob = screen.getByLabelText("Job offer form");
      expect(contactFormJob).toHaveAttribute("aria-disabled", "false");
      expect(contactFormJob).toBeInTheDocument();
   });

   test("renders ContactFormJob h3 element", () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactFormJob = screen.getByRole("heading", { name: "IF YOU FIND MY WORK INTERESTING, WE CAN HAVE A TALK ABOUT HOW I CAN HELP YOU." });
      expect(contactFormJob).toBeInTheDocument();
   });

   test("renders ContactFormJob form element", () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactFormJob = screen.getByTestId("form");
      expect(contactFormJob).toBeInTheDocument();
   });

   test("renders ContactFormJob name input field element in the contact form", () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactForm = screen.getByLabelText("Job offer form");
      const nameInput = contactForm.querySelector("input[type='text']");
      expect(nameInput).toHaveAttribute("placeholder", "NAME");
      expect(nameInput).toBeInTheDocument();
   });

   test("renders errors when adding an incorrect input to name input field element", async () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactForm = screen.getByLabelText("Job offer form");
      const nameInput = contactForm.querySelector("input[type='text']");
      const phoneInput = contactForm.querySelector("input[type='tel']");
      if (nameInput && phoneInput) {
         expect(document.body).toHaveFocus();
         await user.tab();
         expect(nameInput).toHaveFocus();
         await user.tab();
         expect(phoneInput).toHaveFocus();
         const nameInputError = contactForm.querySelector("span[id='name-error-message']");
         const nameInputErrorSvg = contactForm.querySelector("img[alt='Name error icon']");
         expect(nameInputError).toBeInTheDocument();
         expect(nameInputErrorSvg).toBeInTheDocument();
         await user.click(nameInput);
         const invalidName = "a83";
         await user.type(nameInput, invalidName);
         expect(nameInputError).toBeInTheDocument();
         expect(nameInputErrorSvg).toBeInTheDocument();
      }
   });

   test("renders success svg when adding a correct input to name input field element", async () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactForm = screen.getByLabelText("Job offer form");
      const nameInput = contactForm.querySelector("input[type='text']");
      const phoneInput = contactForm.querySelector("input[type='tel']");
      if (nameInput && phoneInput) {
         expect(document.body).toHaveFocus();
         await user.tab();
         expect(nameInput).toHaveFocus();
         await user.tab();
         expect(phoneInput).toHaveFocus();
         const nameInputError = contactForm.querySelector("span[id='name-error-message']");
         const nameInputErrorSvg = contactForm.querySelector("img[alt='Name error icon']");
         expect(nameInputError).toBeInTheDocument();
         expect(nameInputErrorSvg).toBeInTheDocument();
         await user.click(nameInput);
         const validName = "as";
         await user.type(nameInput, validName);
         const nameInputSuccessSvg = contactForm.querySelector("img[alt='Name success icon']");
         expect(nameInputError).not.toBeInTheDocument();
         expect(nameInputErrorSvg).not.toBeInTheDocument();
         expect(nameInputSuccessSvg).toBeInTheDocument();
      }
   });

   test("renders ContactFormJob phone input field element", () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactForm = screen.getByLabelText("Job offer form");
      const phoneInput = contactForm.querySelector("input[type='tel']");
      expect(phoneInput).toHaveAttribute("placeholder", "PHONE NUMBER");
      expect(phoneInput).toBeInTheDocument();
   });

   test("renders errors when adding an incorrect input to phone input field element", async () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactForm = screen.getByLabelText("Job offer form");
      const nameInput = contactForm.querySelector("input[type='text']");
      const phoneInput = contactForm.querySelector("input[type='tel']");
      const emailInput = contactForm.querySelector("input[type='email']");
      if (nameInput && phoneInput && emailInput) {
         expect(document.body).toHaveFocus();
         await user.tab();
         expect(nameInput).toHaveFocus();
         await user.tab();
         expect(phoneInput).toHaveFocus();
         await user.tab();
         expect(emailInput).toHaveFocus();
         const phoneInputError = contactForm.querySelector("span[id='phone-error-message']");
         const phoneInputErrorSvg = contactForm.querySelector("img[alt='Phone error icon']");
         expect(phoneInputError).toBeInTheDocument();
         expect(phoneInputErrorSvg).toBeInTheDocument();
         await user.click(phoneInput);
         const invaliPhone = "a83";
         await user.type(phoneInput, invaliPhone);
         expect(phoneInputError).toBeInTheDocument();
         expect(phoneInputErrorSvg).toBeInTheDocument();
      }
   });

   test("renders success when adding a correct input to phone input field element", async () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactForm = screen.getByLabelText("Job offer form");
      const nameInput = contactForm.querySelector("input[type='text']");
      const phoneInput = contactForm.querySelector("input[type='tel']");
      const emailInput = contactForm.querySelector("input[type='email']");
      if (nameInput && phoneInput && emailInput) {
         expect(document.body).toHaveFocus();
         await user.tab();
         expect(nameInput).toHaveFocus();
         await user.tab();
         expect(phoneInput).toHaveFocus();
         await user.tab();
         expect(emailInput).toHaveFocus();
         const phoneInputError = contactForm.querySelector("span[id='phone-error-message']");
         const phoneInputErrorSvg = contactForm.querySelector("img[alt='Phone error icon']");
         expect(phoneInputError).toBeInTheDocument();
         expect(phoneInputErrorSvg).toBeInTheDocument();
         await user.click(phoneInput);
         const validPhone = "123456";
         await user.type(phoneInput, validPhone);
         const phoneInputSuccessSvg = contactForm.querySelector("img[alt='Phone success icon']");
         expect(phoneInputError).not.toBeInTheDocument();
         expect(phoneInputErrorSvg).not.toBeInTheDocument();
         expect(phoneInputSuccessSvg).toBeInTheDocument();
      }
   });

   test("renders ContactFormJob email input field element", () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactForm = screen.getByLabelText("Job offer form");
      const emailInput = contactForm.querySelector("input[type='email']");
      expect(emailInput).toHaveAttribute("placeholder", "EMAIL");
      expect(emailInput).toBeInTheDocument();
   });

   test("renders errors when adding an incorrect input to email input field element", async () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactForm = screen.getByLabelText("Job offer form");
      const nameInput = contactForm.querySelector("input[type='text']");
      const phoneInput = contactForm.querySelector("input[type='tel']");
      const emailInput = contactForm.querySelector("input[type='email']");
      const textArea = contactForm.querySelector("textarea");
      if (nameInput && phoneInput && emailInput && textArea) {
         expect(document.body).toHaveFocus();
         await user.tab();
         expect(nameInput).toHaveFocus();
         await user.tab();
         expect(phoneInput).toHaveFocus();
         await user.tab();
         expect(emailInput).toHaveFocus();
         await user.tab();
         expect(textArea).toHaveFocus();
         const emailInputError = contactForm.querySelector("span[id='email-error-message']");
         const emailInputErrorSvg = contactForm.querySelector("img[alt='Email error icon']");
         expect(emailInputError).toBeInTheDocument();
         expect(emailInputErrorSvg).toBeInTheDocument();
         await user.click(emailInput);
         const invalidEmail = "a83@.com";
         await user.type(emailInput, invalidEmail);
         expect(emailInputError).toBeInTheDocument();
         expect(emailInputErrorSvg).toBeInTheDocument();
      }
   });

   test("renders success when adding a correct input to email input field element", async () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactForm = screen.getByLabelText("Job offer form");
      const nameInput = contactForm.querySelector("input[type='text']");
      const phoneInput = contactForm.querySelector("input[type='tel']");
      const emailInput = contactForm.querySelector("input[type='email']");
      const textArea = contactForm.querySelector("textarea");
      if (nameInput && phoneInput && emailInput && textArea) {
         expect(document.body).toHaveFocus();
         await user.tab();
         expect(nameInput).toHaveFocus();
         await user.tab();
         expect(phoneInput).toHaveFocus();
         await user.tab();
         expect(emailInput).toHaveFocus();
         await user.tab();
         expect(textArea).toHaveFocus();
         const emailInputError = contactForm.querySelector("span[id='email-error-message']");
         const emailInputErrorSvg = contactForm.querySelector("img[alt='Email error icon']");
         expect(emailInputError).toBeInTheDocument();
         expect(emailInputErrorSvg).toBeInTheDocument();
         await user.click(emailInput);
         const validEmail = "a@a.es";
         await user.type(emailInput, validEmail);
         const emailInputSuccessSvg = contactForm.querySelector("img[alt='Email success icon']");
         expect(emailInputError).not.toBeInTheDocument();
         expect(emailInputErrorSvg).not.toBeInTheDocument();
         expect(emailInputSuccessSvg).toBeInTheDocument();
      }
   });

   test("renders ContactFormJob message textarea field element", () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactForm = screen.getByLabelText("Job offer form");
      const textArea = contactForm.querySelector("textarea");
      expect(textArea).toHaveAttribute("placeholder", "MESSAGE (optional)");
      expect(textArea).toBeInTheDocument();
   });

   test("renders ContactFormJob submit button element", () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactForm = screen.getByLabelText("Job offer form");
      const button = contactForm.querySelector("button");
      expect(button).toHaveAttribute("type", "submit");
      expect(button).toBeInTheDocument();
   });

   test("submitting the form without filling the required fields will return errors", async () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactForm = screen.getByLabelText("Job offer form");
      const nameInput = contactForm.querySelector("input[type='text']");
      const phoneInput = contactForm.querySelector("input[type='tel']");
      const emailInput = contactForm.querySelector("input[type='email']");
      const submitButton = contactForm.querySelector("button");
      if (nameInput && phoneInput && emailInput && submitButton) {
         await user.click(submitButton);
         const nameInputError = contactForm.querySelector("span[id='name-error-message']");
         const phoneInputError = contactForm.querySelector("span[id='phone-error-message']");
         const emailInputError = contactForm.querySelector("span[id='email-error-message']");
         expect(nameInputError).toBeInTheDocument();
         expect(phoneInputError).toBeInTheDocument();
         expect(emailInputError).toBeInTheDocument();
      }
   });

   test("submitting the form filling the required fields will return success icons", async () => {
      render(<ContactFormJob activeForm="secondForm" />);
      const contactForm = screen.getByLabelText("Job offer form");
      const nameInput = contactForm.querySelector("input[type='text']");
      const phoneInput = contactForm.querySelector("input[type='tel']");
      const emailInput = contactForm.querySelector("input[type='email']");
      const submitButton = contactForm.querySelector("button");
      if (nameInput && phoneInput && emailInput && submitButton) {
         await user.click(submitButton);
         const nameInputError = contactForm.querySelector("span[id='name-error-message']");
         const phoneInputError = contactForm.querySelector("span[id='phone-error-message']");
         const emailInputError = contactForm.querySelector("span[id='email-error-message']");
         expect(nameInputError).toBeInTheDocument();
         expect(phoneInputError).toBeInTheDocument();
         expect(emailInputError).toBeInTheDocument();
         await user.type(nameInput, "as");
         await user.click(phoneInput);
         await user.type(phoneInput, "123456");
         await user.click(emailInput);
         await user.type(emailInput, "user@example.es");
         await user.click(submitButton);
         const nameInputSuccessSvg = contactForm.querySelector("img[alt='Name success icon']");
         const phoneInputSuccessSvg = contactForm.querySelector("img[alt='Phone success icon']");
         const emailInputSuccessSvg = contactForm.querySelector("img[alt='Email success icon']");
         expect(nameInputError).not.toBeInTheDocument();
         expect(phoneInputError).not.toBeInTheDocument();
         expect(emailInputError).not.toBeInTheDocument();
         expect(nameInputSuccessSvg).toBeInTheDocument();
         expect(phoneInputSuccessSvg).toBeInTheDocument();
         expect(emailInputSuccessSvg).toBeInTheDocument();
      }
   });
});
