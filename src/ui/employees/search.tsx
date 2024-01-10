"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { SearchIcon } from "../../../public/assets/icons";

function Search({ label }: { label: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <TextField
      defaultValue={searchParams.get("query")?.toString()}
      onChange={(e) => handleSearch(e.target.value)}
      id="outlined-basic"
      label={label}
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
  );
}

export default Search;
