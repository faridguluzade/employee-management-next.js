import Grid from "@mui/material/Unstable_Grid2";

import EmployeeTable from "@/features/employees/table";
import EmployeeTableOperations from "@/features/employees/table-operations";
import EmployeeHeader from "@/features/employees/header";

import { columns } from "@/constants";
import { getEmployees, getFilteredEmployees } from "@/services/apiEmployee";

async function Employees({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const employees = await getFilteredEmployees(query);

  return (
    <Grid container direction="column" gap={6}>
      <Grid container direction="row">
        <EmployeeHeader />
      </Grid>

      <Grid container direction="row" spacing={2}>
        <EmployeeTableOperations />
      </Grid>

      <Grid>
        <EmployeeTable employees={employees} query={query} columns={columns} />
      </Grid>
    </Grid>
  );
}

export default Employees;
