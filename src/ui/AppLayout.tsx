"use client";

import Box from "@mui/material/Box";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { grey } from "@mui/material/colors";

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
        <Box sx={(theme) => theme.mixins.toolbar}></Box>
        {children}
      </Box>
    </Box>
  );
}

export default AppLayout;
