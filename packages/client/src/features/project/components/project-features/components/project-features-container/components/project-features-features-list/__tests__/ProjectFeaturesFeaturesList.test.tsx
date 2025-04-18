import { render, screen } from "@testing-library/react";
import ProjectFeaturesFeaturesList from "../ProjectFeaturesFeaturesList";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectFeaturesFeaturesList", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectFeaturesList element", () => {
      render(<ProjectFeaturesFeaturesList project={mockProjects[0]} />);
      const featuresListContainer = screen.getByLabelText("Project features features list");
      expect(featuresListContainer).toBeInTheDocument();
   });

   test("renders ProjectsFeaturesList title element", () => {
      render(<ProjectFeaturesFeaturesList project={mockProjects[0]} />);
      const featuresListTitle = screen.getByRole("heading");
      expect(featuresListTitle).toHaveTextContent("Features");
      expect(featuresListTitle).toBeInTheDocument();
   });

   test("renders the paragraph element", () => {
      render(<ProjectFeaturesFeaturesList project={mockProjects[0]} />);
      expect(screen.getByText(mockProjects[0].project_features)).toBeInTheDocument();
   });
});
