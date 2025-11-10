import { renderHook } from "@testing-library/react";
import { useThemeContext } from "../useThemeContext/useThemeContext";
import { restoreConsoleError, surpressConsoleError } from "./test-utils/testUtils";

describe("useThemeContext hook", () => {
   beforeAll(() => {
      surpressConsoleError();
   });

   afterAll(() => {
      restoreConsoleError();
   });

   test("should throw an error when used outside of ThemeProvider", () => {
      expect(() => {
         renderHook(() => useThemeContext());
      }).toThrow("useTheme must be used within a ThemeProvider");
   });
});
