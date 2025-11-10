import { render, screen } from "@testing-library/react";
import ProjectTimelineEventsList from "../ProjectTimelineEventsList";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectTimelineEventsList", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ProjectTimelineEventsList element", () => {
      render(<ProjectTimelineEventsList project={mockProjects[0]} />);
      const eventsListContainer = screen.getByLabelText("Project timeline events list");
      expect(eventsListContainer).toBeInTheDocument();
   });

   test("renders ProjectTimelineEventsList title element", () => {
      render(<ProjectTimelineEventsList project={mockProjects[0]} />);
      const eventsListTitle = screen.getByRole("heading");
      expect(eventsListTitle).toBeInTheDocument();
   });

   test("renders the placeholder element", () => {
      render(<ProjectTimelineEventsList project={mockProjects[0]} />);
      expect(screen.getByText(mockProjects[0].project_features)).toBeInTheDocument();
   });
});
