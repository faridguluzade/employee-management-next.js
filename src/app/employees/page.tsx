import Grid from "@mui/material/Unstable_Grid2";

import EmployeeTable from "@/features/employees/EmployeeTable";
import EmployeeTableOperations from "@/features/employees/EmployeeTableOperations";
import EmployeeHeader from "@/features/employees/EmployeeHeader";

import { mockData, columns } from "@/constants";

function Employees() {
  return (
    <Grid container direction="column" gap={6}>
      <Grid container direction="row">
        <EmployeeHeader />
      </Grid>

      <Grid container direction="row" spacing={2}>
        <EmployeeTableOperations />
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
