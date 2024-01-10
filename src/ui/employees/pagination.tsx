"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import MuiPagination from "@mui/material/Pagination";

import { PAGE_SIZE } from "@/lib/constants";

export default function Pagination({
  count,
  currentPage,
}: {
  count: number;
  currentPage: number;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const pageCount = Math.ceil(count / PAGE_SIZE);

  console.log(count);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", value.toString());

    replace(`${pathname}?${params.toString()}`);
  };

  //   if (pageCount <= 1) return null;

  return (
    <MuiPagination
      count={pageCount}
      page={currentPage}
      onChange={handleChange}
      shape="rounded"
      color="primary"
    />
  );
}
