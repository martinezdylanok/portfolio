import { render, screen } from "@testing-library/react";
import ProjectMainCoverContainer from "../ProjectMainCoverContainer";

describe("ProjectMainCoverContainer", () => {
   test("render ProjectMainCoverContainer element", () => {
      render(<ProjectMainCoverContainer />);
      const mainCoverContainer = screen.getByLabelText("Project main cover container");
      expect(mainCoverContainer).toBeInTheDocument();
   });
});
