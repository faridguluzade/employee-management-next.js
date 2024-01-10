import { Suspense } from "react";

import Grid from "@mui/material/Unstable_Grid2";

import EmployeeTable from "@/ui/employees/table";
import TableOperations from "@/ui/employees/table-operations";
import Header from "@/ui/employees/header";
import { TableOperationsSkeleton, TableSkeleton } from "@/ui/skeletons";

import { getFilteredEmployees } from "@/services/apiEmployee";

export default async function Employees({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    status?: string;
    office?: string;
    job?: string;
  };
}) {
  const query = searchParams?.query || "";
  const status = searchParams?.status || "";
  const office = searchParams?.office || "";
  const job = searchParams?.job || "";

  return (
    <Grid container direction="column" gap={6}>
      <Grid container direction="row">
        <Header />
      </Grid>

      <Suspense fallback={<TableOperationsSkeleton />}>
        <TableOperations />
      </Suspense>

      <Suspense
        key={query + status + office + job}
        fallback={<TableSkeleton rowsNum={5} />}
      >
        <EmployeeTable
          query={query}
          status={status}
          office={office}
          job={job}
        />
      </Suspense>
    </Grid>
  );
}
