import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { setupLightMode, resetModes } from "./test-utils/test-utils";

describe("Header component tests", () => {
   beforeAll(() => {
      vi.mock("../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("should render the header element", () => {
      render(<Header />);
      const header = screen.getByRole("banner");
      expect(header).toBeInTheDocument();
   });
});
