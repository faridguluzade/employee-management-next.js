"use client";

import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useSidebar } from "@/context/SidebarContext";
import { ISidebar } from "@/interfaces";

function Sidebar({ heading, anchor, children }: ISidebar) {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <div>
      <Drawer
        anchor="right"
        open={isOpen[anchor]}
        onClose={toggleSidebar(anchor, false)}
        sx={{
          width: "396px",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "396px",
            padding: "36px",
          },
        }}
      >
        <Typography variant="h4">{heading}</Typography>

        <Stack marginTop={4} spacing={4}>
          {/* Content of the Sidebar */}
          {children}
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            marginTop: "auto",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Button
            onClick={toggleSidebar(anchor, false)}
            variant="outlined"
            sx={{ flex: 1 }}
          >
            Cancel
          </Button>

          <Button color="greyScale" variant="contained" sx={{ flex: 1 }}>
            Create
          </Button>
        </Stack>
      </Drawer>
    </div>
  );
}

export default Sidebar;
