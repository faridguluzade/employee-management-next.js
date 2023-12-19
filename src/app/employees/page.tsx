"use client";

import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import Heading from "@/ui/Heading";
import Select from "@/ui/Select";

import EmployeeTable from "@/features/employees/EmployeeTable";

import { PlusIcon, SearchIcon } from "../../../public/assets/icons";
import { Data, Column } from "@/interfaces";
import { Box } from "@mui/material";

const mockData: Data[] = [
  {
    id: 1,
    employeeName: "John Doe",
    employeeEmail: "john.doe@company.com",
    employeeImage: "https://example.com/image1.jpg",
    jobTitle: "Software Engineer",
    lineManager: "Manager 1",
    departament: "Engineering",
    office: "Office 1",
    employeeStatus: "active",
    account: "Account 1",
    selected: false,
  },
  {
    id: 2,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-boarding",
    account: "Account 2",
    selected: false,
  },
  {
    id: 3,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-leave",
    account: "Account 2",
    selected: false,
  },
  {
    id: 4,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "probation",
    account: "Account 2",
    selected: false,
  },
  {
    id: 5,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-leave",
    account: "Account 2",
    selected: false,
  },
  {
    id: 6,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "active",
    account: "Account 2",
    selected: false,
  },
  {
    id: 7,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "probation",
    account: "Account 2",
    selected: false,
  },
  {
    id: 8,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-leave",
    account: "Account 2",
    selected: false,
  },
  {
    id: 9,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-boarding",
    account: "Account 2",
    selected: false,
  },
  {
    id: 10,
    employeeName: "Jane Doe",
    employeeEmail: "jane.doe@company.com",
    employeeImage: "https://example.com/image2.jpg",
    jobTitle: "Product Manager",
    lineManager: "Manager 2",
    departament: "Product Management",
    office: "Office 2",
    employeeStatus: "on-boarding",
    account: "Account 2",
    selected: false,
  },
];

const columns: Column[] = [
  {
    id: "employeeName",
    label: "Employee Name",
    render: (row) => (
      <Stack direction="row" spacing={1}>
        <Avatar src="/avatar.png" />
        <Box>
          <Typography variant="body2">{row.employeeName}</Typography>
          <Typography color="textSecondary" variant="caption" display="block">
            {row.employeeEmail}
          </Typography>
        </Box>
      </Stack>
    ),
  },
  {
    id: "jobTitle",
    label: "Job Title",
    render: (row) => `${row.jobTitle}`,
  },
  {
    id: "lineManager",
    label: "Line Manager",
    render: (row) => `${row.lineManager}`,
  },
  {
    id: "departament",
    label: "Departament",
    render: (row) => `${row.departament}`,
  },
  {
    id: "office",
    label: "Office",
    render: (row) => `${row.office} `,
  },
  {
    id: "employeeStatus",
    label: "Employee Status",
    render: (row) => ` ${row.employeeStatus}`,
  },
  {
    id: "account",
    label: "Account",
    render: (row) => `${row.account}`,
  },
];

const statusArr = [
  { label: "All Status", value: "All Status" },
  { label: "Active", value: "Active" },
  { label: "On Boarding", value: "On Boarding" },
  { label: "Probation", value: "Probation" },
  { label: "On Leave", value: "On Leave" },
];

function Employees() {
  return (
    <Grid container direction="column" gap={2} spacing={4}>
      <Grid container direction="row">
        <Grid sx={{ flexGrow: 1 }}>
          <Heading title="Employees" subheader="Manage your Employee" />
        </Grid>
        <Grid>
          <Button
            color="greyScale"
            variant="contained"
            startIcon={<PlusIcon />}
          >
            Add New
          </Button>
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={2}>
        <Grid xs={6}>
          <TextField
            id="outlined-basic"
            label="Search Employee"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid xs={2}>
          <Select label="Status" options={statusArr} />
        </Grid>
        <Grid xs={2}>
          <Select label="Status" options={statusArr} />
        </Grid>
        <Grid xs={2}>
          <Select label="Status" options={statusArr} />
        </Grid>
      </Grid>

      <Grid>
        <EmployeeTable
          data={mockData}
          columns={columns}
          pagination={true}
          selection={true}
          action={true}
        />
      </Grid>
    </Grid>
  );
}

export default Employees;
