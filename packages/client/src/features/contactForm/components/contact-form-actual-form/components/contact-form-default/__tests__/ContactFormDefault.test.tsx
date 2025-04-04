import { render, screen } from "@testing-library/react";
import ContactFormDefault from "../ContactFormDefault";
import { setupLightMode, resetModes, user } from "./test-utils/testUtils";

describe("ContactFormActualForm tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("not renders ContactFormDefault component if it is not active", () => {
      render(<ContactFormDefault activeForm="secondForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      expect(contactFormDefault).toHaveAttribute("aria-disabled", "true");
      expect(contactFormDefault).toBeInTheDocument();
   });

   test("renders ContactFormDefault component if it is active", () => {
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      expect(contactFormDefault).toHaveAttribute("aria-disabled", "false");
      expect(contactFormDefault).toBeInTheDocument();
   });

   test("renders ContactFormDefault h3 element", () => {
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByRole("heading", { name: "ANYTHING THAT YOU WANT TO TALK ABOUT? DO NOT DOUBT TO CONTACT ME." });
      expect(contactFormDefault).toBeInTheDocument();
   });

   test("renders ContactFormDefault form element", () => {
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByTestId("form");
      expect(contactFormDefault).toBeInTheDocument();
   });

   test("renders ContactFormDefault name input field element in the contact form", () => {
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      const nameInput = contactFormDefault.querySelector("input[type='text']");
      expect(nameInput).toHaveAttribute("placeholder", "NAME");
      expect(nameInput).toBeInTheDocument();
   });

   test("renders errors when adding an incorrect input to name input field element", async () => {
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      const nameInput = contactFormDefault.querySelector("input[type='text']");
      const phoneInput = contactFormDefault.querySelector("input[type='tel']");
      if (nameInput && phoneInput) {
         expect(document.body).toHaveFocus();
         await user.tab();
         expect(nameInput).toHaveFocus();
         await user.tab();
         expect(phoneInput).toHaveFocus();
         const nameInputError = contactFormDefault.querySelector("span[id='name-error-message']");
         const nameInputErrorSvg = contactFormDefault.querySelector("img[alt='Name error icon']");
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
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      const nameInput = contactFormDefault.querySelector("input[type='text']");
      const phoneInput = contactFormDefault.querySelector("input[type='tel']");
      if (nameInput && phoneInput) {
         expect(document.body).toHaveFocus();
         await user.tab();
         expect(nameInput).toHaveFocus();
         await user.tab();
         expect(phoneInput).toHaveFocus();
         const nameInputError = contactFormDefault.querySelector("span[id='name-error-message']");
         const nameInputErrorSvg = contactFormDefault.querySelector("img[alt='Name error icon']");
         expect(nameInputError).toBeInTheDocument();
         expect(nameInputErrorSvg).toBeInTheDocument();
         await user.click(nameInput);
         const validName = "as";
         await user.type(nameInput, validName);
         const nameInputSuccessSvg = contactFormDefault.querySelector("img[alt='Name success icon']");
         expect(nameInputError).not.toBeInTheDocument();
         expect(nameInputErrorSvg).not.toBeInTheDocument();
         expect(nameInputSuccessSvg).toBeInTheDocument();
      }
   });

   test("renders ContactFormDefault phone input field element", () => {
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      const phoneInput = contactFormDefault.querySelector("input[type='tel']");
      expect(phoneInput).toHaveAttribute("placeholder", "PHONE NUMBER");
      expect(phoneInput).toBeInTheDocument();
   });

   test("renders errors when adding an incorrect input to phone input field element", async () => {
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      const nameInput = contactFormDefault.querySelector("input[type='text']");
      const phoneInput = contactFormDefault.querySelector("input[type='tel']");
      const emailInput = contactFormDefault.querySelector("input[type='email']");
      if (nameInput && phoneInput && emailInput) {
         expect(document.body).toHaveFocus();
         await user.tab();
         expect(nameInput).toHaveFocus();
         await user.tab();
         expect(phoneInput).toHaveFocus();
         await user.tab();
         expect(emailInput).toHaveFocus();
         const phoneInputError = contactFormDefault.querySelector("span[id='phone-error-message']");
         const phoneInputErrorSvg = contactFormDefault.querySelector("img[alt='Phone error icon']");
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
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      const nameInput = contactFormDefault.querySelector("input[type='text']");
      const phoneInput = contactFormDefault.querySelector("input[type='tel']");
      const emailInput = contactFormDefault.querySelector("input[type='email']");
      if (nameInput && phoneInput && emailInput) {
         expect(document.body).toHaveFocus();
         await user.tab();
         expect(nameInput).toHaveFocus();
         await user.tab();
         expect(phoneInput).toHaveFocus();
         await user.tab();
         expect(emailInput).toHaveFocus();
         const phoneInputError = contactFormDefault.querySelector("span[id='phone-error-message']");
         const phoneInputErrorSvg = contactFormDefault.querySelector("img[alt='Phone error icon']");
         expect(phoneInputError).toBeInTheDocument();
         expect(phoneInputErrorSvg).toBeInTheDocument();
         await user.click(phoneInput);
         const validPhone = "123456";
         await user.type(phoneInput, validPhone);
         const phoneInputSuccessSvg = contactFormDefault.querySelector("img[alt='Phone success icon']");
         expect(phoneInputError).not.toBeInTheDocument();
         expect(phoneInputErrorSvg).not.toBeInTheDocument();
         expect(phoneInputSuccessSvg).toBeInTheDocument();
      }
   });

   test("renders ContactFormDefault email input field element", () => {
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      const emailInput = contactFormDefault.querySelector("input[type='email']");
      expect(emailInput).toHaveAttribute("placeholder", "EMAIL");
      expect(emailInput).toBeInTheDocument();
   });

   test("renders errors when adding an incorrect input to email input field element", async () => {
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      const nameInput = contactFormDefault.querySelector("input[type='text']");
      const phoneInput = contactFormDefault.querySelector("input[type='tel']");
      const emailInput = contactFormDefault.querySelector("input[type='email']");
      const textArea = contactFormDefault.querySelector("textarea");
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
         const emailInputError = contactFormDefault.querySelector("span[id='email-error-message']");
         const emailInputErrorSvg = contactFormDefault.querySelector("img[alt='Email error icon']");
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
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      const nameInput = contactFormDefault.querySelector("input[type='text']");
      const phoneInput = contactFormDefault.querySelector("input[type='tel']");
      const emailInput = contactFormDefault.querySelector("input[type='email']");
      const textArea = contactFormDefault.querySelector("textarea");
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
         const emailInputError = contactFormDefault.querySelector("span[id='email-error-message']");
         const emailInputErrorSvg = contactFormDefault.querySelector("img[alt='Email error icon']");
         expect(emailInputError).toBeInTheDocument();
         expect(emailInputErrorSvg).toBeInTheDocument();
         await user.click(emailInput);
         const validEmail = "a@a.es";
         await user.type(emailInput, validEmail);
         const emailInputSuccessSvg = contactFormDefault.querySelector("img[alt='Email success icon']");
         expect(emailInputError).not.toBeInTheDocument();
         expect(emailInputErrorSvg).not.toBeInTheDocument();
         expect(emailInputSuccessSvg).toBeInTheDocument();
      }
   });

   test("renders ContactFormDefault message textarea field element", () => {
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      const textArea = contactFormDefault.querySelector("textarea");
      expect(textArea).toHaveAttribute("placeholder", "MESSAGE (optional)");
      expect(textArea).toBeInTheDocument();
   });

   test("renders ContactFormDefault submit button element", () => {
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      const button = contactFormDefault.querySelector("button");
      expect(button).toHaveAttribute("type", "submit");
      expect(button).toBeInTheDocument();
   });

   test("submitting the form without filling the required fields will return errors", async () => {
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      const nameInput = contactFormDefault.querySelector("input[type='text']");
      const phoneInput = contactFormDefault.querySelector("input[type='tel']");
      const emailInput = contactFormDefault.querySelector("input[type='email']");
      const submitButton = contactFormDefault.querySelector("button");
      if (nameInput && phoneInput && emailInput && submitButton) {
         await user.click(submitButton);
         const nameInputError = contactFormDefault.querySelector("span[id='name-error-message']");
         const phoneInputError = contactFormDefault.querySelector("span[id='phone-error-message']");
         const emailInputError = contactFormDefault.querySelector("span[id='email-error-message']");
         expect(nameInputError).toBeInTheDocument();
         expect(phoneInputError).toBeInTheDocument();
         expect(emailInputError).toBeInTheDocument();
      }
   });

   test("submitting the form filling the required fields will return success icons", async () => {
      render(<ContactFormDefault activeForm="firstForm" />);
      const contactFormDefault = screen.getByLabelText("Contact form");
      const nameInput = contactFormDefault.querySelector("input[type='text']");
      const phoneInput = contactFormDefault.querySelector("input[type='tel']");
      const emailInput = contactFormDefault.querySelector("input[type='email']");
      const submitButton = contactFormDefault.querySelector("button");
      if (nameInput && phoneInput && emailInput && submitButton) {
         await user.click(submitButton);
         const nameInputError = contactFormDefault.querySelector("span[id='name-error-message']");
         const phoneInputError = contactFormDefault.querySelector("span[id='phone-error-message']");
         const emailInputError = contactFormDefault.querySelector("span[id='email-error-message']");
         expect(nameInputError).toBeInTheDocument();
         expect(phoneInputError).toBeInTheDocument();
         expect(emailInputError).toBeInTheDocument();
         await user.type(nameInput, "as");
         await user.click(phoneInput);
         await user.type(phoneInput, "123456");
         await user.click(emailInput);
         await user.type(emailInput, "user@example.es");
         await user.click(submitButton);
         const nameInputSuccessSvg = contactFormDefault.querySelector("img[alt='Name success icon']");
         const phoneInputSuccessSvg = contactFormDefault.querySelector("img[alt='Phone success icon']");
         const emailInputSuccessSvg = contactFormDefault.querySelector("img[alt='Email success icon']");
         expect(nameInputError).not.toBeInTheDocument();
         expect(phoneInputError).not.toBeInTheDocument();
         expect(emailInputError).not.toBeInTheDocument();
         expect(nameInputSuccessSvg).toBeInTheDocument();
         expect(phoneInputSuccessSvg).toBeInTheDocument();
         expect(emailInputSuccessSvg).toBeInTheDocument();
      }
   });
});
