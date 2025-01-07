import { render, screen } from "@testing-library/react";
import ProjectFeaturesFeaturesList from "../ProjectFeaturesFeaturesList";

describe("ProjectFeaturesFeaturesList", () => {
   test("renders the features list container", () => {
      render(<ProjectFeaturesFeaturesList />);
      const featuresListContainer = screen.getByLabelText("Features list");
      expect(featuresListContainer).toBeInTheDocument();
   });

   test("renders the subtitle element", () => {
      render(<ProjectFeaturesFeaturesList />);
      const subtitleElement = screen.getByRole("heading", { level: 3, name: /features list/i });
      expect(subtitleElement).toBeInTheDocument();
   });

   test("renders the paragraph element", () => {
      render(<ProjectFeaturesFeaturesList />);
      const paragraphElement = screen.getByRole("paragraph");
      expect(paragraphElement).toBeInTheDocument();
   });
});
