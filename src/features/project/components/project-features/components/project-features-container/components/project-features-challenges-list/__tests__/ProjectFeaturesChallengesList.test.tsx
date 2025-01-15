import { render, screen } from "@testing-library/react";
import ProjectFeaturesChallengesList from "../ProjectFeaturesChallengesList";

describe("ProjectFeaturesChallengesList", () => {
   test("renders PrjectFeaturesChallengesList element", () => {
      render(<ProjectFeaturesChallengesList />);
      const container = screen.getByLabelText("Project features challenges list");
      expect(container).toBeInTheDocument();
   });

   test("renders the subtitle element", () => {
      render(<ProjectFeaturesChallengesList />);
      const subtitle = screen.getByRole("heading", { level: 2, name: /challenges/i });
      expect(subtitle).toBeInTheDocument();
   });

   test("renders the paragraph element", () => {
      render(<ProjectFeaturesChallengesList />);
      const paragraph = screen.getByRole("paragraph");
      expect(paragraph).toBeInTheDocument();
   });
});
