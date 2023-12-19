"use client";

import React, { useState, useEffect } from "react";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { EyeIcon, TrashIcon, EditIcon } from "../../public/assets/icons";

const Table: React.FC = ({ columns }: { columns: any }) => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState<keyof any>("id");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setData(mockData);
    };

    fetchData();
  }, [orderBy, order, page, rowsPerPage]);

  const handleRequestSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleToggleSelect = (id: number) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleToggleSelectAll = () => {
    setAllSelected(!allSelected);
    setData((prevData) =>
      prevData.map((item) => ({
        ...item,
        selected: !allSelected,
      }))
    );
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox
                  indeterminate={
                    !allSelected && data.some((row) => row.selected)
                  }
                  checked={allSelected}
                  onChange={handleToggleSelectAll}
                />
              </TableCell>
              {columns.map((column: any) => (
                <TableCell key={column.id}>
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={() => handleRequestSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Checkbox
                      checked={row.selected}
                      onChange={() => handleToggleSelect(row.id)}
                    />
                  </TableCell>
                  {columns.map((column) => (
                    <TableCell align="left" key={column.id}>
                      {row[column.id]}
                    </TableCell>
                  ))}
                  <TableCell align="right">
                    <Stack direction="row" spacing={1}>
                      <Button variant="contained" color="success">
                        <EyeIcon />
                      </Button>
                      <Button variant="contained" color="info">
                        <EditIcon />
                      </Button>
                      <Button variant="contained" color="error">
                        <TrashIcon />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Table;
