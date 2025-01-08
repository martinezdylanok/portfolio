import { render, screen } from "@testing-library/react";
import ContactForm from "../ContactForm";

describe("ContactForm tests", () => {
   test("renders ContactForm element", () => {
      render(<ContactForm />);
      const contactForm = screen.getByLabelText("Contact form container");
      expect(contactForm).toBeInTheDocument();
   });
});
