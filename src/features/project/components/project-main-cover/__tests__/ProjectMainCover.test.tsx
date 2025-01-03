import { render, screen } from "@testing-library/react";
import ProjectMainCover from "../ProjectMainCover";

describe("ProjectMainCover component tests", () => {
   test("render ProjectMainCover element", () => {
      render(<ProjectMainCover />);
      const mainCover = screen.getByRole("region", { name: /main cover/i });
      expect(mainCover).toBeInTheDocument();
   });
});
