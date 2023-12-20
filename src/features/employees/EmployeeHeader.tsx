"use client";

import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

import Heading from "@/ui/Heading";
import AddEmployee from "./AddEmployee";

import { PlusIcon } from "../../../public/assets/icons";
import { useSidebar } from "@/context/SidebarContext";

function EmployeeHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <Grid sx={{ flexGrow: 1 }}>
        <Heading title="Employees" subheader="Manage your Employee" />
      </Grid>
      <Grid>
        <Button
          onClick={toggleSidebar("employee", true)}
          color="greyScale"
          variant="contained"
          startIcon={<PlusIcon />}
        >
          Add New
        </Button>
      </Grid>

      <div>
        <AddEmployee />
      </div>
    </>
  );
}

export default EmployeeHeader;
