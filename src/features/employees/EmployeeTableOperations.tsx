import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@/ui/Select";

import { SearchIcon } from "../../../public/assets/icons";
import { statusArr } from "@/constants";

function EmployeeTableOperations() {
  return (
    <>
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
    </>
  );
}

export default EmployeeTableOperations;
