import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ThemeMode, ThemeContextType } from "./data/themeProviderData";

const themeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
   const [mode, setMode] = useState<ThemeMode>(() => {
      if (typeof window === "undefined") return "light";

      const savedMode = localStorage.getItem("themeMode") as ThemeMode;
      if (savedMode === "light" || savedMode === "dark") return savedMode;

      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
         return "dark";
      }

      return "light";
   });

   useEffect(() => {
      if (typeof window !== "undefined") {
         document.documentElement.setAttribute("data-theme", mode);
         localStorage.setItem("themeMode", mode);
      }
   }, [mode]);

   const toggleMode = () => {
      setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
   };

   const contextValue: ThemeContextType = {
      mode,
      toggleMode,
   };

   return <themeContext.Provider value={contextValue}>{children}</themeContext.Provider>;
};

// 11. Create a custom hook for consuming the theme context
export const useThemeContext = () => {
   const context = useContext(themeContext);
   if (context === undefined) {
      throw new Error("useTheme must be used within a ThemeProvider");
   }
   return context;
};
