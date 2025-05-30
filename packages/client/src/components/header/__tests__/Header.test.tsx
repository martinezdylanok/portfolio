import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import Header from "../Header";
import { getPageYOffset, resetModes, setupDarkMode, setupLightMode } from "./test-utils/test-utils";

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
      const header = screen.getByRole("banner", { name: "Site header" });
      expect(header).toBeInTheDocument();
   });

   test("should render the header correct background color", () => {
      setupDarkMode();
      render(<Header />);
      const header = screen.getByRole("banner", { name: "Site header" });
      expect(header).toHaveClass("bg-[#ABC4FF]");
   });

   test("should render the header with the correct background color in light mode", () => {
      render(<Header />);
      const header = screen.getByRole("banner", { name: "Site header" });
      expect(header).toHaveClass("bg-[#EDF2FB]");
   });

   test("should render the header with the correct Y position", () => {
      render(<Header />);
      const header = screen.getByRole("banner", { name: "Site header" });
      expect(header).toHaveClass("transform-none");
   });

   test("should render the header with the correct Y position after scrolling", async () => {
      render(<Header />);
      const header = screen.getByRole("banner", { name: "Site header" });
      expect(header).toHaveClass("transform-none");

      getPageYOffset();

      act(async () => {
         window.dispatchEvent(new Event("scroll"));

         await waitFor(() => {
            expect(header).toHaveClass("-translate-y-full");
         });
      });
   });
});
