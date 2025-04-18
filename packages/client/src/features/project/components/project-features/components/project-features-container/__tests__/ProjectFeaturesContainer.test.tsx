import { render, screen } from "@testing-library/react";
import ProjectFeaturesContainer from "../ProjectFeaturesContainer";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectFeaturesContainer", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectFeaturesContainer element", () => {
      render(<ProjectFeaturesContainer project={mockProjects[0]} />);
      const featuresContainer = screen.getByLabelText("Features container");
      expect(featuresContainer).toBeInTheDocument();
   });

   test("renders ProjectFeaturesContainer title element", () => {
      render(<ProjectFeaturesContainer project={mockProjects[0]} />);
      const featuresContainerTitle = screen.getByRole("heading", { level: 2 });
      expect(featuresContainerTitle).toHaveTextContent("FEATURES & ITS CHALLENGES");
      expect(featuresContainerTitle).toBeInTheDocument();
   });

   test("renders ProjectFeaturesContainer inner container element", () => {
      render(<ProjectFeaturesContainer project={mockProjects[0]} />);
      const featuresInnerContainer = screen.getByTestId("features-inner-container");
      expect(featuresInnerContainer).toBeInTheDocument();
   });

   test("renders ProjectFeaturesContainer img element", () => {
      render(<ProjectFeaturesContainer project={mockProjects[0]} />);
      const featuresImage = screen.getByAltText("Projects showcase video");
      expect(featuresImage).toBeInTheDocument();
   });
});
