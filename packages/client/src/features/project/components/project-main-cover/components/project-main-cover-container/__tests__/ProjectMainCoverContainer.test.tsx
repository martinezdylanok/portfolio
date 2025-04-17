import { render, screen } from "@testing-library/react";

import ProjectMainCoverContainer from "../ProjectMainCoverContainer";
import { mockProjects, resetModes, setupLightMode } from "./test-utils/testUtils";

describe("ProjectMainCoverContainer component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme.tsx");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("render ProjectMainCoverContainer element", () => {
      render(<ProjectMainCoverContainer project={mockProjects[0]} />);
      const mainCoverContainer = screen.getByLabelText("Project main cover container");
      expect(mainCoverContainer).toBeInTheDocument();
   });
});
