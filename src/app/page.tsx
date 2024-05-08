import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Appbar, Map, Sidebar } from "@/components/index";
export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar />
      <Sidebar />
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
