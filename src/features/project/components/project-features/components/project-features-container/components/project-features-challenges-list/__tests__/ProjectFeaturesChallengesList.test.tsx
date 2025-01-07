import { render, screen } from "@testing-library/react";
import ProjectFeaturesChallengesList from "../ProjectFeaturesChallengesList";

describe("ProjectFeaturesChallengesList", () => {
   test("renders the challenges list container", () => {
      render(<ProjectFeaturesChallengesList />);
      const container = screen.getByLabelText("Challenges list");
      expect(container).toBeInTheDocument();
   });

   test("renders the subtitle element", () => {
      render(<ProjectFeaturesChallengesList />);
      const subtitle = screen.getByRole("heading", { level: 3, name: /challenges/i });
      expect(subtitle).toBeInTheDocument();
   });

   test("renders the paragraph element", () => {
      render(<ProjectFeaturesChallengesList />);
      const paragraph = screen.getByRole("paragraph");
      expect(paragraph).toBeInTheDocument();
   });
});
