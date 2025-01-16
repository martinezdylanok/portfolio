import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer Component tests", () => {
   test("render Footer element", () => {
      render(<Footer />);
      const footerElement = screen.getByRole("contentinfo");
      expect(footerElement).toBeInTheDocument();
   });
});
