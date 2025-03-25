import { render, screen } from "@testing-library/react";
import FooterContent from "../FooterContent";
import { setupLightMode, resetModes } from "./test-utils/test-utils";

describe("FooterContent tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("should render the FooterContent element", () => {
      render(<FooterContent />);
      const footerContent = screen.getByLabelText("Footer content container");
      expect(footerContent).toBeInTheDocument();
   });
});
