import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import HeaderNavigation from "../HeaderNavigation";
import { NAV_ARIA_LABEL_TEXT, WRAPPER_ARIA_LABEL_TEXT, SPAN_TEXT, FORM_ARIA_LABEL_TEXT, INPUT_ARIA_LABEL_TEXT } from "../data/headerNavigationData";
import { setupLightMode, resetModes, setupDarkMode, mockProjects } from "./test-utils/test-utils";
import userEvent from "@testing-library/user-event";

describe("HeaderNavigation Component tests", () => {
   const isVisible = true;

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
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const navElement = screen.getByLabelText(NAV_ARIA_LABEL_TEXT);
      expect(navElement).toBeInTheDocument();
   });

   test("shoudl render the navigation wrapper element with the correct role", () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const wrapperElement = screen.getByLabelText(WRAPPER_ARIA_LABEL_TEXT);
      expect(wrapperElement).toBeInTheDocument();
   });

   test("should render the span element with the correct text", () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const spanElement = screen.getByText(SPAN_TEXT);
      expect(spanElement).toBeInTheDocument();
   });

   test("should render the span element with the correct background color in light mode", () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const spanElement = screen.getByText(SPAN_TEXT);
      expect(spanElement).toHaveClass("text-[#ABC4FF]");
   });

   test("should render the span element with the correct background color in dark mode", () => {
      setupDarkMode();
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const spanElement = screen.getByText(SPAN_TEXT);
      expect(spanElement).toHaveClass("text-[#EDF2FB]");
   });

   test("should render the form element with the correct aria-label", () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const formElement = screen.getByLabelText(FORM_ARIA_LABEL_TEXT);
      expect(formElement).toBeInTheDocument();
   });

   test("should render the input element with the correct text", () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const inputElement = screen.getByLabelText(INPUT_ARIA_LABEL_TEXT);
      expect(inputElement).toBeInTheDocument();
   });

   test("should render the input element with the correct background color in light mode", () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const inputElement = screen.getByLabelText(INPUT_ARIA_LABEL_TEXT);
      expect(inputElement).toHaveClass("text-[#ABC4FF]");
   });

   test("should render the input element with the correct background color in dark mode", () => {
      setupDarkMode();
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const inputElement = screen.getByLabelText(INPUT_ARIA_LABEL_TEXT);
      expect(inputElement).toHaveClass("text-[#EDF2FB]");
   });

   test("should render the span element with the correct text color in light mode", () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const spanElement = screen.getByTestId("cursor-span");
      expect(spanElement).toHaveClass("bg-[#ABC4FF]");
   });

   test("should render the span element with the correct text color in dark mode", () => {
      setupDarkMode();
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const spanElement = screen.getByTestId("cursor-span");
      expect(spanElement).toHaveClass("bg-[#EDF2FB]");
   });

   test("should render the ul element with the correct aria-labelledby attribute", () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const ulElement = screen.getByRole("list");
      expect(ulElement).toHaveAttribute("aria-labelledby", "projects-menu-button");
   });

   test("should render the ul element with the correct background color in light mode", () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const ulElement = screen.getByRole("list");
      expect(ulElement).toHaveClass("bg-[#B6CCFE]");
   });

   test("should render the ul element with the correct background color in dark mode", () => {
      setupDarkMode();
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const ulElement = screen.getByRole("list");
      expect(ulElement).toHaveClass("bg-[#E2EAFC]");
   });

   test("should check if the ul element is hidden by default", () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const ulElement = screen.getByRole("list");
      expect(ulElement).toHaveClass("hidden");
   });

   test("should check if the ul element is visible when projectsAreVisible is true", async () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const ulElement = screen.getByRole("list");
      expect(ulElement).toHaveClass("hidden");

      const inputElement = screen.getByLabelText(INPUT_ARIA_LABEL_TEXT);
      const formElement = screen.getByLabelText(FORM_ARIA_LABEL_TEXT);

      fireEvent.change(inputElement, { target: { value: "ls" } });
      fireEvent.submit(formElement);

      await waitFor(() => {
         expect(ulElement).toHaveClass("visible");
      });
   });

   test("should render the list elements with the correct role", async () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const listItems = await screen.findAllByRole("listitem");
      expect(listItems).toHaveLength(3);
   });

   test("should render the list elements with the correct background color in light mode", async () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const listItems = await screen.findAllByRole("listitem");
      listItems.forEach((listItem) => {
         expect(listItem).toHaveClass("hover:bg-[#ABC4FF]");
      });
   });

   test("should render the list elements with the correct background color in dark mode", async () => {
      setupDarkMode();
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const listItems = await screen.findAllByRole("listitem");
      listItems.forEach((listItem) => {
         expect(listItem).toHaveClass("hover:bg-[#EDF2FB]");
      });
   });

   test("should render the correct list item text", async () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const listItems = await screen.findAllByRole("listitem");
      expect(listItems[0]).toHaveTextContent("Project 1");
      expect(listItems[1]).toHaveTextContent("Project 2");
      expect(listItems[2]).toHaveTextContent("Project 3");
   });

   test("should render the correct a element text in light mode", async () => {
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const listItems = await screen.findAllByRole("listitem");
      const links = listItems.map((listItem) => listItem.querySelector("a"));
      links.forEach((link) => {
         expect(link).toHaveClass("text-[#E2EAFC]");
      });
   });

   test("should render the correct a element text in dark mode", async () => {
      setupDarkMode();
      render(<HeaderNavigation headerIsVisible={isVisible} />);
      const listItems = await screen.findAllByRole("listitem");
      const links = listItems.map((listItem) => listItem.querySelector("a"));
      links.forEach((link) => {
         expect(link).toHaveClass("text-[#B6CCFE]");
      });
   });
});
