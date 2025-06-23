import React from "react";
import { ThemeContext, type ThemeOptionsType, ThemeOptionsValidator } from "./ThemeContext";
// import { z } from "zod";
import issueFlattener from "../../utility/zod-error-flattener";
import logError from "../../utility/log-error";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const getDefaultTheme: () => ThemeOptionsType = () => {
    const { success, data } = ThemeOptionsValidator.safeParse(localStorage.getItem("theme"));
    return success ? data : "black";
  }
  const [theme,setTheme] = React.useState<ThemeOptionsType>(getDefaultTheme());

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const applyTheme = (theme: ThemeOptionsType) => {
    const { success, data, error } = ThemeOptionsValidator.safeParse(theme);
    if (success) {
      localStorage.setItem("theme", data);
      document.documentElement.setAttribute('data-theme', data);
      setTheme(data);
    } else logError(issueFlattener(error));
  };

  return (
    <ThemeContext.Provider value={{theme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
