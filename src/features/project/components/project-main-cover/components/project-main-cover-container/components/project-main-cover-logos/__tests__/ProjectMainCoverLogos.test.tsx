import { render, screen } from "@testing-library/react";
import ProjectMainCoverLogos from "../ProjectMainCoverLogos";

describe("ProjectMainCoverLogos", () => {
   test("render the logos", () => {
      render(<ProjectMainCoverLogos />);
      const logos = screen.getByLabelText("Logos");
      expect(logos).toBeInTheDocument();
   });

   test("render the company logo", () => {
      render(<ProjectMainCoverLogos />);
      const companyLogo = screen.getByAltText("Company logo");
      expect(companyLogo).toBeInTheDocument();
   });

   test("render Dylan Martinez's logo", () => {
      render(<ProjectMainCoverLogos />);
      const ownLogo = screen.getByAltText("Dylan Martinez's logo");
      expect(ownLogo).toBeInTheDocument();
   });
});
