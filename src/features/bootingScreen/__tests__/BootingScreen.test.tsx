import { render, screen } from "@testing-library/react";
import BootingScreen from "../BootingScreen";

describe("BootingScreen component tests", () => {
   test("renders the Booting Screen element using correct aria label", () => {
      render(<BootingScreen />);
      const bootingScreen = screen.getByLabelText("Booting Screen");
      expect(bootingScreen).toBeInTheDocument();
   });

   test("renders the company name element using correct text", () => {
      render(<BootingScreen />);
      const companyName = screen.getByText("MacroHard®");
      expect(companyName).toBeInTheDocument();
   });

   test("renders the logo element using correct alt text", () => {
      render(<BootingScreen />);
      const logo = screen.getByAltText("OS logo");
      expect(logo).toBeInTheDocument();
   });

   test("renders the product name and version elements using correct texts", () => {
      render(<BootingScreen />);
      const productName = screen.getByText("Doors®");
      const version = screen.getByText("xd");
      const products = [productName, version];
      products.forEach((product) => {
         expect(product).toBeInTheDocument();
      });
   });

   test("renders the loading bar element", () => {
      render(<BootingScreen />);
      const loadingBar = screen.getByRole("progressbar");
      expect(loadingBar).toBeInTheDocument();
   });

   test("rendes the inner bar and progress bar elements", () => {
      render(<BootingScreen />);
      const loadingBar = screen.getByLabelText("Loading bar");
      const innerBar = loadingBar.querySelector(".booting-screen__inner-bar");
      const progressBar = loadingBar.querySelector(".booting-screen__progress-bar");
      const bars = [innerBar, progressBar];
      bars.forEach((bar) => {
         expect(bar).toBeInTheDocument();
      });
   });

   test("renders the copyright element", () => {
      render(<BootingScreen />);
      const copyrightStatement = screen.getByText("Copyright MacroHard Corporation");
      const companyName = screen.getByText("MacroHard");
      const elements = [companyName, copyrightStatement];
      elements.forEach((element) => {
         expect(element).toBeInTheDocument();
      });
   });
});
