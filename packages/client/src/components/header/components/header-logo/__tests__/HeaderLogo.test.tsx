import { render, screen } from "@testing-library/react";
import HeaderLogo from "../HeaderLogo";
import { LOGO_CONTAINER_ARIA_LABEL, LOGO_IMAGE_ALT_TEXT, LOGO_TITLE_TEXT } from "../data/headerLogoConstants";
import { setupLightMode, resetModes } from "./test-utils/test-utils";
import userEvent from "@testing-library/user-event";

describe("HeaderLogo Component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("should render logo container with correct aria label", () => {
      render(<HeaderLogo />);
      const logoContainer = screen.getByLabelText(LOGO_CONTAINER_ARIA_LABEL);
      expect(logoContainer).toBeInTheDocument();
   });
   test("should render link element with correct role", () => {
      render(<HeaderLogo />);
      const logoLink = screen.getByRole("link");
      expect(logoLink).toBeInTheDocument();
   });
   test("should render image element with correct alt text", () => {
      render(<HeaderLogo />);
      const logoImage = screen.getByAltText(LOGO_IMAGE_ALT_TEXT);
      expect(logoImage).toBeInTheDocument();
   });

   test("should render the image element with the default class name", () => {
      render(<HeaderLogo />);
      const logoImage = screen.getByAltText(LOGO_IMAGE_ALT_TEXT);
      expect(logoImage).toHaveClass("header__logo-image");
   });

   test("should change the image element class with the lifted class name when hovered", async () => {
      render(<HeaderLogo />);
      const logoImage = screen.getByAltText(LOGO_IMAGE_ALT_TEXT);
      const logoContainer = screen.getByLabelText(LOGO_CONTAINER_ARIA_LABEL);
      await userEvent.hover(logoContainer);
      expect(logoImage).toHaveClass("lifted");
   });

   test("should change the image element class with the unlifted class name when unhovered", async () => {
      render(<HeaderLogo />);
      const logoImage = screen.getByAltText(LOGO_IMAGE_ALT_TEXT);
      const logoContainer = screen.getByLabelText(LOGO_CONTAINER_ARIA_LABEL);
      await userEvent.unhover(logoContainer);
      expect(logoImage).not.toHaveClass("lifted");
   });

   test("should change the image class with the lifted class name when hovered and then unhovered", async () => {
      render(<HeaderLogo />);
      const logoImage = screen.getByAltText(LOGO_IMAGE_ALT_TEXT);
      const logoContainer = screen.getByLabelText(LOGO_CONTAINER_ARIA_LABEL);
      await userEvent.hover(logoContainer);
      expect(logoImage).toHaveClass("lifted");
      await userEvent.unhover(logoContainer);
      expect(logoImage).not.toHaveClass("lifted");
   });

   test("should render title element with correct text content", () => {
      render(<HeaderLogo />);
      const logoTitle = screen.getByText(LOGO_TITLE_TEXT);
      expect(logoTitle).toBeInTheDocument();
   });
});
