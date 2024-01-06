"use client";

import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MuiSelect, { SelectChangeEvent } from "@mui/material/Select";

import { ISelect } from "@/types";

function Select({ label, options, filterField }: ISelect) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentFilter = searchParams.get(filterField) || options[0].value;

  console.log(currentFilter);

  const handleChange = (event: SelectChangeEvent) => {
    const params = new URLSearchParams(searchParams);
    if (event.target.value) {
      params.set(filterField, event.target.value);
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
          onChange={handleChange}
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
