import Grid from "@mui/material/Unstable_Grid2";
import EmployeeTable from "@/ui/employees/table";
import EmployeeTableOperations from "@/ui/employees/table-operations";
import EmployeeHeader from "@/ui/employees/header";

import { getFilteredEmployees } from "@/services/apiEmployee";
import { getOffices } from "@/services/apiOffice";
import { getJobs } from "@/services/apiJob";
import { columns } from "@/constants";

async function Employees({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    status?: string;
  };
}) {
  const query = searchParams?.query || "";
  const status = searchParams?.status || "";
  // const employees = await getFilteredEmployees(query, status);
  const [employees, offices, jobs] = await Promise.all([
    getFilteredEmployees(query, status),
    getOffices(),
    getJobs(),
  ]);

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
