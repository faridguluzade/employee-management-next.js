"use client";

import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

import Header from "./Header";
import SideNavbar from "./SideNavbar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <SideNavbar />

      <Box
        sx={{
          width: "100%",
          background: grey[50],
          padding: "32px",
        }}
      >
        <Box
          sx={
            (theme) => theme.mixins.toolbar
            // { marginTop: "70px" }
          }
        ></Box>
        {children}
      </Box>
    </Box>
  );
}

export default AppLayout;
