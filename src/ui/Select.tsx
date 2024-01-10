"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MuiSelect, { SelectChangeEvent } from "@mui/material/Select";

import { ISelect } from "@/types";

// export const statusArr = [
//   { label: "All Status", value: "all" },
//   { label: "Active", value: "ACTIVE" },
//   { label: "On Boarding", value: "ON_BOARDING" },
//   { label: "Probation", value: "PROBATION" },
//   { label: "On Leave", value: "ON_LEAVE" },
// ];

function Select({ label, options, filterField }: ISelect) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentFilter = searchParams.get(filterField);

  const handleChange = (term: string | null) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(filterField, term);
    } else {
      params.delete(filterField);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">{label}</InputLabel>
        <MuiSelect
          labelId="select-label"
          id="select"
          value={currentFilter}
          label={label}
          onChange={(e) => handleChange(e.target.value)}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MuiSelect>
      </FormControl>
    </Box>
  );
}

export default Select;
