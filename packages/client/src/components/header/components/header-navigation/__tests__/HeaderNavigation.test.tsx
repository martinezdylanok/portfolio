import { render, screen } from "@testing-library/react";
import HeaderNavigation from "../HeaderNavigation";
import { NAV_ARIA_LABEL_TEXT, BUTTON_ARIA_LABEL_TEXT, INPUT_ARIA_LABEL_TEXT } from "../data/headerNavigationData";
import { setupLightMode, resetModes, mockProjects } from "./test-utils/test-utils";

describe("HeaderNavigation Component tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme");
      mockProjects();
   });

   beforeEach(() => {
      setupLightMode();
   });

   afterAll(() => {
      resetModes();
   });

   test("should render the navigation element with the correct aria-label", () => {
      render(<HeaderNavigation />);
      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();
   });

   test("should render the button element with the correct role", () => {
      render(<HeaderNavigation />);
      const buttonElement = screen.getByLabelText(BUTTON_ARIA_LABEL_TEXT);
      expect(buttonElement).toBeInTheDocument();
   });

   test("should render the input element with the correct text", () => {
      render(<HeaderNavigation />);
      const inputElement = screen.getByLabelText(INPUT_ARIA_LABEL_TEXT);
      expect(inputElement).toBeInTheDocument();
   });

   test("should render the ul element with the correct role", () => {
      render(<HeaderNavigation />);
      const ulElement = screen.getByRole("list");
      expect(ulElement).toBeInTheDocument();
   });

   test("should check if the ul element is hidden by default", () => {
      render(<HeaderNavigation />);
      const ulElement = screen.getByRole("list");
      expect(ulElement).toHaveClass("hidden");
   });

   test("should turn the ul element visible when the button is clicked", async () => {
      render(<HeaderNavigation />);
      const buttonElement = screen.getByLabelText(BUTTON_ARIA_LABEL_TEXT);
      const ulElement = screen.getByRole("list");
      expect(ulElement).toHaveClass("hidden");
      await buttonElement.click();
      expect(ulElement).toHaveClass("visible");
   });

   test("should render the list elements with the correct role", async () => {
      render(<HeaderNavigation />);
      const listItems = await screen.findAllByRole("listitem");
      expect(listItems).toHaveLength(3);
   });

   test("should render the correct list item text", async () => {
      render(<HeaderNavigation />);
      const listItems = await screen.findAllByRole("listitem");
      expect(listItems[0]).toHaveTextContent("Project 1");
      expect(listItems[1]).toHaveTextContent("Project 2");
      expect(listItems[2]).toHaveTextContent("Project 3");
   });
});
