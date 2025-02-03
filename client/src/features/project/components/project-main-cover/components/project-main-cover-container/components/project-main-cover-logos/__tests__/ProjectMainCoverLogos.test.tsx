import { render, screen } from "@testing-library/react";
import ProjectMainCoverLogos from "../ProjectMainCoverLogos";

describe("ProjectMainCoverLogos", () => {
   test("render ProjectMainCoverLogos element", () => {
      render(<ProjectMainCoverLogos />);
      const container = screen.getByLabelText("Logos of the project's involved parties");
      expect(container).toBeInTheDocument();
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
