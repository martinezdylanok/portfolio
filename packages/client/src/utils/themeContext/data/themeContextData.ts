export type ThemeMode = "light" | "dark" | "retro";

export interface ThemeContextType {
   mode: ThemeMode;
   toggleMode: () => void;
}
