import { createContext } from "react";
import { ThemeContextType } from "./data/themeContextData";

export const themeContext = createContext<ThemeContextType | undefined>(undefined);
