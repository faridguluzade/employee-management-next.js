import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

import Heading from "@/ui/Heading";

import { PlusIcon } from "../../../public/assets/icons";

function EmployeeHeader() {
  return (
    <>
      <Grid sx={{ flexGrow: 1 }}>
        <Heading title="Employees" subheader="Manage your Employee" />
      </Grid>
      <Grid>
        <Button color="greyScale" variant="contained" startIcon={<PlusIcon />}>
          Add New
        </Button>
      </Grid>
    </>
  );
}

export default EmployeeHeader;
