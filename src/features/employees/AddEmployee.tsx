"use client";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Sidebar from "@/ui/Sidebar";

const AddEmployee = () => {
  return (
    <Sidebar heading="Add new Employee" anchor="employee">
      <TextField required type="text" label="First Name" />
      <TextField required type="text" label="Last Name" />
      <TextField required type="email" label="Email Address" />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker />
      </LocalizationProvider>
    </Sidebar>
  );
};

export default AddEmployee;
