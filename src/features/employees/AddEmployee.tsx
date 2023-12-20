"use client";

import React, { useState } from "react";
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  Stack,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useSidebar } from "@/context/SidebarContext";

const AddEmployee = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <div>
      <Drawer
        anchor="right"
        open={isOpen["employee"]}
        onClose={toggleSidebar("employee", false)}
        sx={{
          width: "396px",
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "396px",
            padding: "36px",
          },
        }}
      >
        <Typography variant="h4">Add New Profile</Typography>
        <Stack marginTop={4} spacing={4}>
          <TextField required type="text" label="First Name" />
          <TextField required type="text" label="Last Name" />
          <TextField required type="email" label="Email Address" />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker />
          </LocalizationProvider>
        </Stack>

        <Stack
          direction="row"
          spacing={3}
          sx={{ marginTop: "auto", justifyContent: "center" }}
        >
          <Button onClick={toggleSidebar("employee", false)} variant="outlined">
            Cancel
          </Button>

          <Button color="greyScale" variant="contained">
            Create
          </Button>
        </Stack>
      </Drawer>
    </div>
  );
};

export default AddEmployee;
