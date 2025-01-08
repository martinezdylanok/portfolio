import { render, screen } from "@testing-library/react";
import ContactFormActualForm from "../ContactFormActualForm";

describe("ContactFormActualForm tests", () => {
   test("renders ContactFormActualForm element", () => {
      render(<ContactFormActualForm />);
      const contactFormActualFormElement = screen.getByRole("form", { name: "Contact form" });
      expect(contactFormActualFormElement).toBeInTheDocument();
   });

   test("renders name input field", () => {
      render(<ContactFormActualForm />);
      const nameInput = screen.getByPlaceholderText("NAME");
      expect(nameInput).toBeInTheDocument();
   });

   test("renders phone input field", () => {
      render(<ContactFormActualForm />);
      const phoneInput = screen.getByPlaceholderText("PHONE NUMBER");
      expect(phoneInput).toBeInTheDocument();
   });

   test("renders email input field", () => {
      render(<ContactFormActualForm />);
      const emailInput = screen.getByPlaceholderText("EMAIL");
      expect(emailInput).toBeInTheDocument();
   });

   test("renders message textarea field", () => {
      render(<ContactFormActualForm />);
      const messageTextarea = screen.getByPlaceholderText("MESSAGE");
      expect(messageTextarea).toBeInTheDocument();
   });

   test("renders submit button", () => {
      render(<ContactFormActualForm />);
      const submitButton = screen.getByRole("button", { name: "SEND" });
      expect(submitButton).toBeInTheDocument();
   });
});
