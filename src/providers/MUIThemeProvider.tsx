"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode, useContext } from "react";
import { orange } from "@mui/material/colors";
import { AppContext } from "./AppProvider";

const MUIThemeProvider = ({ children }: { children: ReactNode }) => {
  const { themeToggle, setThemeToggle } = useContext(AppContext);
  const darkTheme = createTheme({
    palette: {
      mode: themeToggle,
      primary: {
        main: orange[500],
        contrastText: "#fff",
      },
    },
  });
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default MUIThemeProvider;
