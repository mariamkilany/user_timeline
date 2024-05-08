import { Avatar, Box, Divider, Stack, Toolbar } from "@mui/material";
import { DaySelector } from "./index";
import Event from "./Event";

export const SideDrawer = () => {
  return (
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
};
