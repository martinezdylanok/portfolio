import { render, screen } from "@testing-library/react";
import FooterContent from "../FooterContent";

describe("FooterContent tests", () => {
   test("renders FooterContent element", () => {
      render(<FooterContent />);
      const footerContent = screen.getByLabelText("Footer content container");
      expect(footerContent).toBeInTheDocument();
   });
});
