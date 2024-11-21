/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export const defaultTheme = {
  smutsrosa: "#D77DD4",
  skugglila: "#AB3DA7",
};

export const christmasTheme = {
  smutsrosa: "#28A24B",
  skugglila: "#C91212",
};

interface ThemeContextProps {
  theme: typeof defaultTheme;
  changeTheme: (themeName: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);

  const changeTheme = (themeName: string) => {
    const newTheme = themeName === "christmas" ? christmasTheme : defaultTheme;
    setTheme(newTheme);
    console.log("Nytt tema:", newTheme); // Kontrollera temat
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
