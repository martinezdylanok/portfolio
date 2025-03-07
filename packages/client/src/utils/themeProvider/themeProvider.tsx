import { useState, useEffect, ReactNode } from "react";
import { ThemeMode, ThemeContextType } from "../themeContext/data/themeContextData";
import { themeContext } from "../themeContext/themeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
   const [mode, setMode] = useState<ThemeMode>(() => {
      if (typeof window === "undefined") return "light";

      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
         return "dark";
      }

      const savedMode = localStorage.getItem("themeMode") as ThemeMode;
      if (savedMode === "light" || savedMode === "dark") return savedMode;

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
