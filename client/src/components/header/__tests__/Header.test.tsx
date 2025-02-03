import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header component tests", () => {
   test("renders the header element", () => {
      render(<Header />);
      const header = screen.getByRole("banner");
      expect(header).toBeInTheDocument();
   });
});
