import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import CustomToolBar from "./CustomToolBar";
import CustomTableHead from "./CustomTableHead";
import { IData } from "../../types/index";
import { dateSorter } from "../../utils/helper";

import Data from "../../data/MOCK_DATA.json";

const rows: IData[] = Data || [
  {
    id: 1,
    first_name: "Kliment",
    last_name: "Aloshikin",
    email: "kaloshikin0@hugedomains.com",
    gender: "Female",
    ip_address: "92.65.28.152",
    time: "3:18 AM",
  },
  {
    id: 2,
    first_name: "Raina",
    last_name: "Norcop",
    email: "rnorcop1@drupal.org",
    gender: "Male",
    ip_address: "80.51.137.40",
    time: "1:41 PM",
  },
  {
    id: 3,
    first_name: "Joela",
    last_name: "Fields",
    email: "jfields2@1und1.de",
    gender: "Male",
    ip_address: "204.192.105.191",
    time: "3:19 PM",
  },
];

type Order = "asc" | "desc";

interface HeadCell {
  id: string;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: "id",
    label: "ID",
  },
  {
    id: "first_name",
    label: "First Name",
  },
  {
    id: "last_name",
    label: "Last Name",
  },
  {
    id: "email",
    label: "Email",
  },

  {
    id: "gender",
    label: "Gender",
  },
  {
    id: "ip_address",
    label: "IP Address",
  },
  {
    id: "time",
    label: "Time",
  },
];

export const CustomTable = () => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof IData>("id");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IData
  ) => {
    const isAsc = orderBy === property && order === "asc";

    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <CustomToolBar />

        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <CustomTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
            />

            <TableBody>
              {dateSorter(rows, order)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `custom-table-${index}`;

                  return (
                    <TableRow hover tabIndex={-1} key={row.id}>
                      <TableCell id={labelId} scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell scope="row">{row.first_name}</TableCell>
                      <TableCell scope="row">{row.last_name}</TableCell>
                      <TableCell scope="row">{row.email}</TableCell>
                      <TableCell scope="row">{row.gender}</TableCell>
                      <TableCell scope="row">{row.ip_address}</TableCell>
                      <TableCell scope="row">{row.time}</TableCell>
                    </TableRow>
                  );
                })}

              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 33 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};
