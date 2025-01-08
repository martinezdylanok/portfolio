import { render, screen } from "@testing-library/react";
import ContactFormTitle from "../ContactFormTitle";

describe("ContactFormTitle tests", () => {
   test("renders ContactFormTitle element", () => {
      render(<ContactFormTitle />);
      const titleElement = screen.getByRole("heading", { name: "Let's talk" });
      expect(titleElement).toBeInTheDocument();
   });
});
