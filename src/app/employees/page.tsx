import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import Heading from "@/ui/Heading";
import Select from "@/ui/Select";

import { PlusIcon, SearchIcon } from "../../../public/assets/icons";
import EmployeeTable from "@/features/employees/EmployeeTable";

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

      <Grid container direction="row">
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

      <EmployeeTable />
    </Grid>
  );
}

export default Employees;
