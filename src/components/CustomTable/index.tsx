import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { headCells } from "../../columns";
import { IData, TOrder } from "../../types/index";
import { dateSorter } from "../../utils/helper";
import CustomTableHead from "./CustomTableHead";
import CustomToolBar from "./CustomToolBar";

export const CustomTable = ({ data }: { data: IData[] }) => {
  const [order, setOrder] = React.useState<TOrder>("asc");
  const [orderBy, setOrderBy] = React.useState<IData["time"]>("time");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // We sorting the data and data is not  mutatable so we need to do this
  let rows = data.slice();

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: IData["time"]
  ) => {
    const newOrder = order === "asc" ? "desc" : "asc";

    setOrder(newOrder);
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
          rowsPerPageOptions={[10, 15, 25]}
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
