import Grid from "@mui/material/Unstable_Grid2";

import Select from "@/ui/select";
import Search from "./search";

import { statusArr } from "@/constants";

function EmployeeTableOperations() {
  return (
    <>
      <Grid xs={6}>
        <Search label="Search Employee" />
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
    </>
  );
}

export default EmployeeTableOperations;
