"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { useContext, useState } from "react";
import Map from "./map/Map";
import { Divider } from "@mui/material";
import { orange } from "@mui/material/colors";
import DaySelector from "./DaySelector";
import Event from "./Event";
import { AppContext } from "@/providers/AppProvider";

const drawerWidth = 300;

export default function Sidebar() {
  const { mobileOpen, setMobileOpen, isClosing, setIsClosing } =
    useContext(AppContext);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width={"100%"}
        >
          <Stack
            direction="row"
            spacing={1}
            style={{ fontFamily: "Briem Hand , cursive" }}
          >
            <img src="/assets/placeholder.png" className="w-10 h-10" />
            <h1 className=" text-2xl ">Event map</h1>
          </Stack>
          <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=37" />
        </Stack>
      </Toolbar>
      <Divider />
      <Stack p={2} spacing={3} direction="column">
        <DaySelector />
        <Box>
          <h4>Click on event location to view details here 🕣📅</h4>
        </Box>
        <Event />
      </Stack>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
              </Toolbar>
            </AppBar>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          display: "block",
          width: { xs: `100vw` },
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Map />
      </Box>
    </Box>
  );
}
