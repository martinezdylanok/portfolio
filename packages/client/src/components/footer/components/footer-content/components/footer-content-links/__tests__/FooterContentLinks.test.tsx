import { render, screen } from "@testing-library/react";
import FooterContentLinks from "../FooterContentLinks";
import { setupLightMode, resetModes } from "./test-utils/testUtils";

describe("FooterContentLinks tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders FooterContentLinks element", () => {
      render(<FooterContentLinks />);
      const FooterContentLinksElement = screen.getByLabelText("Footer content links");
      expect(FooterContentLinksElement).toBeInTheDocument();
   });
});
