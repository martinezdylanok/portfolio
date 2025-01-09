import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer Component tests", () => {
   it("render Footer element", () => {
      render(<Footer />);
      const footerElement = screen.getByRole("contentinfo");
      expect(footerElement).toBeInTheDocument();
   });
});
