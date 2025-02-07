import { render, screen } from "@testing-library/react";
import ProjectFeaturesContainer from "../ProjectFeaturesContainer";

describe("ProjectFeaturesContainer", () => {
   test("renders ProjectFeaturesContainer element", () => {
      render(<ProjectFeaturesContainer />);
      const featuresContainer = screen.getByLabelText("Features container");
      expect(featuresContainer).toBeInTheDocument();
   });
});
