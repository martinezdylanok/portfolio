import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header component tests", () => {
   test("renders the header element", () => {
      render(<Header />);
      const header = screen.getByRole("banner");
      expect(header).toBeInTheDocument();
   });

   test("renders the logo element", () => {
      render(<Header />);
      const logo = screen.getByLabelText("Logo link");
      expect(logo).toBeInTheDocument();
   });

   test("renders the logo image", () => {
      render(<Header />);
      const logoImage = screen.getByAltText("Logo of the website");
      expect(logoImage).toBeInTheDocument();
   });

   test("renders the navigation element", () => {
      render(<Header />);
      const navigation = screen.getByLabelText("Main navigation");
      expect(navigation).toBeInTheDocument();
   });

   test("renders the navigation list", () => {
      render(<Header />);
      const navigation = screen.getByLabelText("Main navigation");
      const navigationList = navigation.querySelector("ul");
      expect(navigationList).toBeInTheDocument();
   });

   test("renders the navigation list items", () => {
      render(<Header />);
      const navigation = screen.getByLabelText("Main navigation");
      const navigationList = navigation.querySelector("ul");
      if (navigationList) {
         const navigationListItems = navigationList.querySelectorAll("li");
         expect(navigationListItems).toHaveLength(2);
      } else {
         throw new Error("Navigation list not found");
      }
   });

   test("renders the navigation links", () => {
      render(<Header />);
      const navigation = screen.getByLabelText("Main navigation");
      const navigationList = navigation.querySelector("ul");
      if (navigationList) {
         const projectsLink = screen.getByLabelText("PROJECTS link");
         const contactLink = screen.getByLabelText("CONTACT link");
         expect(projectsLink).toBeInTheDocument();
         expect(contactLink).toBeInTheDocument();
      } else {
         throw new Error("Navigation list not found");
      }
   });

   test("renders the mode switcher element", () => {
      render(<Header />);
      const modeSwitcher = screen.getByLabelText("Mode switcher button");
      expect(modeSwitcher).toBeInTheDocument();
   });

   test("renders the mode switcher image", () => {
      render(<Header />);
      const modeSwitcherImage = screen.getByAltText("Mode switcher of the website");
      expect(modeSwitcherImage).toBeInTheDocument();
   });
});
