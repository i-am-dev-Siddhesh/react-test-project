import { IData, TOrder } from "../../types";
import Box from "@mui/material/Box";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { visuallyHidden } from "@mui/utils";
import * as React from "react";
import { IHeadCell } from "../../columns";

interface ICustomTableHeadProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property:IData["time"]
  ) => void;
  order: TOrder;
  orderBy: string;
  rowCount: number;
  headCells: readonly IHeadCell[];
}

const CustomTableHead = (props: ICustomTableHeadProps) => {
  const { order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler =
    (property: IData["time"]) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <>
      <TableHead>
        <TableRow>
          {headCells.map((headCell: IHeadCell) => (
            <TableCell
              key={headCell.id}
              align="left"
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                disabled={headCell.id === "time" ? false : true}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
};

export default CustomTableHead;
