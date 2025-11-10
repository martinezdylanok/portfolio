import { render, screen } from "@testing-library/react";
import ProjectTimeline from "../ProjectTimeline";
import { mockProjects, resetModes, setupLightMode } from "./data-utils/dataUtils";

describe("ProjectTimeline component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders the ProjectTimeline element", () => {
      render(<ProjectTimeline project={mockProjects[0]} />);
      const projectTimeline = screen.getByLabelText("Project timeline");
      expect(projectTimeline).toBeInTheDocument();
   });
});
