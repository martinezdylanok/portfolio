import { render, screen } from "@testing-library/react";
import ContactForm from "../ContactForm";
import { setupLightMode, resetModes } from "./test-utils/testUtils";

beforeAll(() => {
   vi.mock("../../../utils/hooks/useTheme");
});

beforeEach(() => {
   setupLightMode();
});

afterAll(() => {
   resetModes();
});

describe("ContactForm tests", () => {
   test("renders ContactForm element", () => {
      render(<ContactForm />);
      const contactForm = screen.getByLabelText("Contact form container");
      expect(contactForm).toBeInTheDocument();
   });
});
