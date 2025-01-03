import { render, screen } from "@testing-library/react";
import ProjectMainCoverContainer from "../ProjectMainCoverContainer";

describe("ProjectMainCoverContainer", () => {
   test("render the main cover container", () => {
      render(<ProjectMainCoverContainer />);
      const mainCoverContainer = screen.getByLabelText("Main cover container");
      expect(mainCoverContainer).toBeInTheDocument();
   });
});
