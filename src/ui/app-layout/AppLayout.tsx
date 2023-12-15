"use client";

import Box from "@mui/material/Box";

import Header from "../Header";
import Sidebar from "../Sidebar";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />

      <Box
        sx={{
          width: "100%",
          background: (theme) => theme.palette.grey[50],
          padding: (theme) => theme.spacing(3),
        }}
      >
        <Box sx={(theme) => theme.mixins.toolbar}></Box>
        {children}
      </Box>
    </Box>
  );
}

export default AppLayout;
