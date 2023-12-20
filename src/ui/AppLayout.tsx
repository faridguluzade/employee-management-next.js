"use client";

import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";

import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />

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
