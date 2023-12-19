"use client";

// ReusableTable.tsx
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";

interface ReusableTableProps {
  fetchItems: (params: {
    page: number;
    pageSize: number;
    sortField: string;
    sortOrder: "asc" | "desc";
  }) => Promise<any[]>;
  columns: { id: string; label: string }[];
  pageSize: number;
  selection?: boolean;
  checkboxSelection?: boolean;
}

const ReusableTable: React.FC<ReusableTableProps> = ({
  fetchItems,
  columns,
  pageSize,
  selection,
  checkboxSelection,
}) => {
  const [page, setPage] = useState(1);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [data, setData] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);

  useEffect(() => {
    fetchData();
  }, [page, sortField, sortOrder]);

  const fetchData = async () => {
    try {
      const result = await fetchItems({ page, pageSize, sortField, sortOrder });
      setData(result.items);
      setTotalItems(result.totalItems);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSort = (field: string) => {
    setSortField(field);
    setSortOrder(
      sortField === field ? (sortOrder === "asc" ? "desc" : "asc") : "asc"
    );
  };

  const handleSelectAllClick = () => {
    if (selected.length === data.length) {
      setSelected([]);
    } else {
      setSelected(data.map((item) => item.id));
    }
  };

  const handleClick = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  return (
    <Paper>
      <Toolbar>
        {selection && (
          <>
            <Typography variant="h6" component="div">
              Selected: {selected.length}
            </Typography>
            <IconButton>
              {/* Add your custom select all button if needed */}
              <Checkbox
                indeterminate={
                  selected.length > 0 && selected.length < data.length
                }
                checked={selected.length === data.length}
                onChange={handleSelectAllClick}
              />
            </IconButton>
          </>
        )}
      </Toolbar>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {selection && (
                <TableCell>
                  <Checkbox
                    indeterminate={
                      selected.length > 0 && selected.length < data.length
                    }
                    checked={selected.length === data.length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
              )}
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  onClick={() => handleSort(column.id)}
                >
                  {column.label}{" "}
                  {sortField === column.id && (
                    <span>{sortOrder === "asc" ? "▲" : "▼"}</span>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                hover
                onClick={() => handleClick(row.id)}
                selected={isSelected(row.id)}
              >
                {selection && (
                  <TableCell>
                    <Checkbox checked={isSelected(row.id)} />
                  </TableCell>
                )}
                {columns.map((column) => (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ReusableTable;
