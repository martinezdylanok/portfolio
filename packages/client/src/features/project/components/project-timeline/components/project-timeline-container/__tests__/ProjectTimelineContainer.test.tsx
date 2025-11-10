import { render, screen } from "@testing-library/react";
import ProjectTimelineContainer from "../ProjectTimelineContainer";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectTimelineContainer", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectTimelineContainer element", () => {
      render(<ProjectTimelineContainer project={mockProjects[0]} />);
      const timelineContainer = screen.getByLabelText("Timeline container");
      expect(timelineContainer).toBeInTheDocument();
   });

   test("renders ProjectTimelineContainer title element", () => {
      render(<ProjectTimelineContainer project={mockProjects[0]} />);
      const timelineContainerTitle = screen.getByRole("heading", { level: 2 });
      expect(timelineContainerTitle).toBeInTheDocument();
   });

   test("renders ProjectTimelineContainer inner container element", () => {
      render(<ProjectTimelineContainer project={mockProjects[0]} />);
      const timelineInnerContainer = screen.getByTestId("timeline-inner-container");
      expect(timelineInnerContainer).toBeInTheDocument();
   });

   test("renders ProjectTimelineContainer title text", () => {
      render(<ProjectTimelineContainer project={mockProjects[0]} />);
      expect(screen.getByText(/timeline/i)).toBeInTheDocument();
   });
});
