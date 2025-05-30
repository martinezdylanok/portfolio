import { ReactNode, useEffect, useState } from "react";
import { ThemeContextType, ThemeMode } from "../themeContext/data/themeContextData";
import { themeContext } from "../themeContext/themeContext";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
   const [mode, setMode] = useState<ThemeMode>(() => {
      if (typeof window === "undefined") return "light";

      const savedMode = localStorage.getItem("themeMode") as ThemeMode;
      if (savedMode === "light" || savedMode === "dark" || savedMode === "retro") return savedMode;

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

   /* Toggle mode function with retro mode in it.
   const toggleMode = () => {
      setMode((prevMode) => {
         if (prevMode === "light") {
            return "dark";
         } else if (prevMode === "dark") {
            return "retro";
         } else { 
            return "light";
         }
      });
   };
   */

   const contextValue: ThemeContextType = {
      mode,
      toggleMode,
   };

   return <themeContext.Provider value={contextValue}>{children}</themeContext.Provider>;
};
