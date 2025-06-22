import { createContext, useContext } from "react";
import { z } from "zod";
export const ThemeOptionsValidator = z.enum(['dark', 'light']);
export type ThemeOptionsType = z.infer<typeof ThemeOptionsValidator>;
export const ThemeContext = createContext<{
  theme: ThemeOptionsType;
  setTheme: (theme: ThemeOptionsType) => void;
}>({
  theme:"dark",
  setTheme: (theme: ThemeOptionsType) => { console.log(theme); },
});
export const useTheme = () => useContext(ThemeContext);
