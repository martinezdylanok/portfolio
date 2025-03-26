import { render, screen } from "@testing-library/react";
import FooterContentSocial from "../FooterContentLinksSocial";
import { setupLightMode, setupDarkMode, resetModes } from "./test-utils/testUtils";

describe("FooterContentSocial tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders FooterContentSocial element", () => {
      render(<FooterContentSocial />);
      const FooterContentSocialElement = screen.getByLabelText("Footer social container");
      expect(FooterContentSocialElement).toBeInTheDocument();
   });

   test("renders FooterContentSocial span element", () => {
      render(<FooterContentSocial />);
      const FooterContentSocialSpanElement = screen.getByText("Follow me on");
      expect(FooterContentSocialSpanElement).toBeInTheDocument();
   });

   test("renders FooterContentSocial span element light mode", () => {
      render(<FooterContentSocial />);
      const FooterContentSocialSpanElement = screen.getByText("Follow me on");
      expect(FooterContentSocialSpanElement).toHaveClass("text-[#ABC4FF]");
   });

   test("renders FooterContentSocial span element dark mode", () => {
      setupDarkMode();
      render(<FooterContentSocial />);
      const FooterContentSocialSpanElement = screen.getByText("Follow me on");
      expect(FooterContentSocialSpanElement).toHaveClass("text-[#EDF2FB]");
   });
});
