import { render, screen, waitFor } from "@testing-library/react";
import HeaderNavigation from "../HeaderNavigation";
import { NAV_ARIA_LABEL_TEXT } from "../data/headerNavigationData";
import { resetModes, setupLightMode, setupRetroMode } from "./test-utils/test-utils";

vi.mock("react-router", () => ({
   ...vi.importActual("react-router"),
   Link: vi.fn(),
   useParams: vi.fn(),
}));

describe("HeaderNavigation Component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
      global.fetch = vi.fn(async () => {
         return Promise.resolve({
            ok: true,
            status: 200,
            json: async () => ({ success: true, data: {} }),
         });
      }) as vi.Mock;
   });

   afterAll(() => {
      resetModes();
   });

   test("should render HeaderNavigation navigation element with the correct aria-label", () => {
      render(<HeaderNavigation />);

      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();
   });

   test("should render HeaderNavigationRetro if mode is set to retro", async () => {
      const { rerender } = render(<HeaderNavigation />);

      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();

      setupRetroMode();

      rerender(<HeaderNavigation />);

      const headerNavigationRetro = await screen.findByLabelText("Retro container");

      expect(navElement).toContainElement(headerNavigationRetro);
   });
});
