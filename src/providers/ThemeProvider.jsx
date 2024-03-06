import { useCallback, useMemo, useState, useContext } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setIsDark(true);
  }, []);

  const toggleLightMode = useCallback(() => {
    setIsDark(false);
  }, []);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  const value = useMemo(() => {
    return { isDark, toggleDarkMode, toggleLightMode };
  }, [isDark, toggleDarkMode, toggleLightMode]);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
