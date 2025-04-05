import { render, screen } from "@testing-library/react";
import ContactFormActualForm from "../ContactFormActualForm";
import { setupLightMode, resetModes, mockHandleActiveStateChange } from "./test-utils/testUtils";

describe("ContactFormActualForm tests", () => {
   beforeAll(() => {
      vi.mock("../../../../../utils/hooks/useTheme");
   });

   beforeEach(() => {
      setupLightMode();
      mockHandleActiveStateChange.mockClear();
   });

   afterAll(() => {
      resetModes();
   });

   test("renders ContactFormActualForm from wrapper", () => {
      render(<ContactFormActualForm activeForm="firstForm" />);
      const contactFormActualFormWrapper = screen.getByLabelText("Forms wrapper");
      expect(contactFormActualFormWrapper).toBeInTheDocument();
   });
});
