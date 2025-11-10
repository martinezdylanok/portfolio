import { ReactNode, useEffect, useState } from "react";
import { ThemeContextType, ThemeMode } from "../themeContext/data/themeContextData";
import { themeContext } from "../themeContext/themeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
   const [theme, setTheme] = useState<ThemeMode>(() => {
      if (typeof window === "undefined") return "light";

      const savedTheme = localStorage.getItem("theme") as ThemeMode;
      if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
         return "dark";
      }

      return "light";
   });

   useEffect(() => {
      if (typeof window !== "undefined") {
         document.documentElement.setAttribute("data-theme", theme);
         localStorage.setItem("theme", theme);
      }
   }, [theme]);

   const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
   };

   const contextValue: ThemeContextType = {
      theme,
      toggleTheme,
   };

   return <themeContext.Provider value={contextValue}>{children}</themeContext.Provider>;
};
