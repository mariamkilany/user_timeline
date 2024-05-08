"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode } from "react";
import { orange } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: orange[500],
      contrastText: "#fff",
    },
  },
});
const MUIThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

export default MUIThemeProvider;
