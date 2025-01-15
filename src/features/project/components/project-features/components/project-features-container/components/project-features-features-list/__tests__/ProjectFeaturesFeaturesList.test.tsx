import { render, screen } from "@testing-library/react";
import ProjectFeaturesFeaturesList from "../ProjectFeaturesFeaturesList";

describe("ProjectFeaturesFeaturesList", () => {
   test("renders ProjectFeaturesList element", () => {
      render(<ProjectFeaturesFeaturesList />);
      const featuresListContainer = screen.getByLabelText("Project features features list");
      expect(featuresListContainer).toBeInTheDocument();
   });

   test("renders the subtitle element", () => {
      render(<ProjectFeaturesFeaturesList />);
      const subtitleElement = screen.getByRole("heading", { level: 2, name: /features/i });
      expect(subtitleElement).toBeInTheDocument();
   });

   test("renders the paragraph element", () => {
      render(<ProjectFeaturesFeaturesList />);
      const paragraphElement = screen.getByRole("paragraph");
      expect(paragraphElement).toBeInTheDocument();
   });
});
