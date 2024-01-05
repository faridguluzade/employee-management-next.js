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
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Actions from "@/ui/actions";
import Status from "@/ui/status";

import { ITable, Data } from "@/types";

const EmployeeTable: React.FC<ITable> = ({
  data,
  columns,
  selection,
  pagination,
  action,
}) => {
  const [newData, setNewData] = useState<Data[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState<keyof Data>("id");
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  const [allSelected, setAllSelected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setNewData(data);
    };

    fetchData();
  }, [orderBy, order, page, rowsPerPage]);

  const handleRequestSort = (property: keyof Data) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleToggleSelect = (id: number) => {
    setNewData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleToggleSelectAll = () => {
    setAllSelected(!allSelected);
    setNewData((prevData) =>
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
              {selection && (
                <TableCell>
                  <Checkbox
                    indeterminate={
                      !allSelected && newData.some((row) => row.selected)
                    }
                    checked={allSelected}
                    onChange={handleToggleSelectAll}
                  />
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell
                  sx={{ color: "#687588", fontWeight: 700 }}
                  key={column.id}
                >
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={orderBy === column.id ? order : "asc"}
                    onClick={() => handleRequestSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
              {action && (
                <TableCell
                  sx={{ color: "#687588", fontWeight: 700 }}
                  align="center"
                >
                  Action
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {newData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  {selection && (
                    <TableCell>
                      <Checkbox
                        checked={row.selected}
                        onChange={() => handleToggleSelect(row.id)}
                      />
                    </TableCell>
                  )}
                  {/* {columns.map((column) => ( */}
                  {/* ))} */}
                  <TableCell align="left">
                    {
                      <Stack direction="row" spacing={1}>
                        <Avatar src="/avatar.png" />
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700 }}>
                            {row.employeeName}
                          </Typography>
                          <Typography
                            color="textSecondary"
                            variant="caption"
                            display="block"
                          >
                            {row.employeeEmail}
                          </Typography>
                        </Box>
                      </Stack>
                    }
                  </TableCell>
                  <TableCell>{row.jobTitle}</TableCell>
                  <TableCell>{row.lineManager}</TableCell>
                  <TableCell>{row.departament}</TableCell>
                  <TableCell>{row.office}</TableCell>
                  <TableCell align="center">
                    <Status status={row.employeeStatus} />
                  </TableCell>
                  <TableCell>{row.account}</TableCell>

                  {action && (
                    <TableCell align="center">
                      <Actions />
                    </TableCell>
                  )}
                </TableRow>
              ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {pagination && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={newData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
};

export default EmployeeTable;
