import { render, screen } from "@testing-library/react";
import ProjectFeaturesChallengesList from "../ProjectFeaturesChallengesList";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectFeaturesChallengesList", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders PrjectFeaturesChallengesList element", () => {
      render(<ProjectFeaturesChallengesList project={mockProjects[0]} />);
      const challengesListContainer = screen.getByLabelText("Project features challenges list");
      expect(challengesListContainer).toBeInTheDocument();
   });

   test("renders the subtitle element", () => {
      render(<ProjectFeaturesChallengesList project={mockProjects[0]} />);
      const challengesListTitle = screen.getByRole("heading");
      expect(challengesListTitle).toHaveTextContent("Challenges");
      expect(challengesListTitle).toBeInTheDocument();
   });

   test("renders the paragraph element", () => {
      render(<ProjectFeaturesChallengesList project={mockProjects[0]} />);
      expect(screen.getByText(mockProjects[0].project_challenges)).toBeInTheDocument();
   });
});
