import { createContext, useContext } from "react";
import { z } from "zod";
export const ThemeOptionsValidator = z.enum(['dark', 'light', 'cupcake', 'retro', 'black', 'dim']);
export type ThemeOptionsType = z.infer<typeof ThemeOptionsValidator>;
export const ThemeContext = createContext<{
  theme: ThemeOptionsType;
  applyTheme: (theme: ThemeOptionsType) => void;
}>({
  theme: "black",
  applyTheme: (theme: ThemeOptionsType) => { console.log(theme); },
});
export const useTheme = () => useContext(ThemeContext);
