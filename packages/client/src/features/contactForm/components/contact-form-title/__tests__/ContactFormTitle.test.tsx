import { render, screen } from "@testing-library/react";
import ContactFormTitle from "../ContactFormTitle";
import { setupLightMode, resetModes } from "./test-utils/testUtils";

describe("ContactFormTitle component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("should render ContactFormTitle element", () => {
      render(<ContactFormTitle />);
      const titleElement = screen.getByRole("heading", { name: "LET'S TALK" });
      expect(titleElement).toBeInTheDocument();
   });
});
