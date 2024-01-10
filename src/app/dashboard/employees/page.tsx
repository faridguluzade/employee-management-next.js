import { Suspense } from "react";

import Grid from "@mui/material/Unstable_Grid2";

import EmployeeTable from "@/ui/employees/table";
import TableOperations from "@/ui/employees/table-operations";
import Header from "@/ui/employees/header";

import { TableOperationsSkeleton, TableSkeleton } from "@/ui/skeletons";

export default async function Employees({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    status?: string;
    office?: string;
    job?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
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
        key={query + status + office + job + currentPage}
        fallback={<TableSkeleton rowsNum={10} />}
      >
        <EmployeeTable
          query={query}
          status={status}
          office={office}
          job={job}
          currentPage={currentPage}
        />
      </Suspense>
    </Grid>
  );
}
