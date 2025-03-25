import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { setupLightMode, resetModes } from "./test-utils/test-utils";

describe("Footer Component tests", () => {
   beforeAll(() => {
      vi.mock("../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("render Footer element", () => {
      render(<Footer />);
      const footerElement = screen.getByRole("contentinfo");
      expect(footerElement).toBeInTheDocument();
   });
});
