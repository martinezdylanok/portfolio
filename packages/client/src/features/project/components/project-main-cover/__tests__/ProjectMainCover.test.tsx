import { render, screen } from "@testing-library/react";
import ProjectMainCover from "../ProjectMainCover";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectMainCover component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("render ProjectMainCover element", () => {
      render(<ProjectMainCover project={mockProjects[0]} />);
      const mainCover = screen.getByLabelText("Project main cover");
      expect(mainCover).toBeInTheDocument();
   });
});
