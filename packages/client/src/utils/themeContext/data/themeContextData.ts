export type ThemeMode = "light" | "dark";

export interface ThemeContextType {
   mode: ThemeMode;
   toggleMode: () => void;
}
