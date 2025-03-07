import { useContext } from "react";
import { themeContext } from "../themeContext/themeContext";

export const useThemeContext = () => {
   const context = useContext(themeContext);
   if (context === undefined) {
      throw new Error("useTheme must be used within a ThemeProvider");
   }
   return context;
};
