import { render, screen } from "@testing-library/react";
import ContactFormSelector from "../ContactFormSelector";

describe("ContactFormSelector tests", () => {
   test("renders ContactFormSelector element", () => {
      render(<ContactFormSelector />);
      const element = screen.getByLabelText("Contact form selector");
      expect(element).toBeInTheDocument();
   });

   test("renders ContactFormSelector first element", () => {
      render(<ContactFormSelector />);
      const element = screen.getByLabelText("Contact form first selector");
      expect(element).toBeInTheDocument();
   });

   test("renders ContactFormSelector first element's h2 element", () => {
      render(<ContactFormSelector />);
      const element = screen.getByRole("heading", { name: "CONTACT", level: 2 });
      expect(element).toBeInTheDocument();
   });

   test("renders ContactFormSelector second element", () => {
      render(<ContactFormSelector />);
      const element = screen.getByLabelText("Contact form second selector");
      expect(element).toBeInTheDocument();
   });

   test("renders ContactFormSelector second element's h2 element", () => {
      render(<ContactFormSelector />);
      const element = screen.getByRole("heading", { name: "JOB OFFER", level: 2 });
      expect(element).toBeInTheDocument();
   });
});
