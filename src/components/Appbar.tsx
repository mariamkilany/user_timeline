"use client";
import { AppContext } from "@/providers/AppProvider";
import { AppBar, IconButton, Switch, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { orange } from "@mui/material/colors";
import { useContext } from "react";

const drawerWidth = 300;

export const Appbar = () => {
  const { mobileOpen, setMobileOpen, isClosing, themeToggle, setThemeToggle } =
    useContext(AppContext);

  const handleDrawerToggle = (): void => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: orange[500],
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          <AppBar
            position="fixed"
            sx={{
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
              backgroundColor: orange[500],
            }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                fontFamily={"Briem Hand , cursive"}
              >
                Life is an event. Make it remarkable ✨
              </Typography>
              <Switch
                checked={themeToggle == "light"}
                onChange={() =>
                  setThemeToggle((prev: any) =>
                    prev == "light" ? "dark" : "light"
                  )
                }
                color={"default"}
              />
            </Toolbar>
          </AppBar>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
