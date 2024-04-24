import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { Edit, Visibility } from "@mui/icons-material";
import { orderDetails } from "../../dev/dummyData";
import { getField } from "../../util/commonUtil";

const rows = orderDetails;

const tableDef = [
  { header: "ID", field: "id", type: "number" },
  { header: "Operator", field: "operator", type: "string" },
  { header: "Design No", field: "designNo", type: "number" },
  { header: "Weight", field: "weight", type: "number" },
  { header: "Process", field: "process", type: "string" },
];

function OrderDetails(props) {
  const [actionId, setActionId] = useState(-1);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableDef.map((item) => (
                <TableCell>{item.header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onMouseEnter={() => {
                  setActionId(row.id);
                }}
                onMouseLeave={() => setActionId(-1)}
              >
                {tableDef.map((item) => {
                  if (item.field == "id") {
                    return (
                      <TableCell component="th" scope="row">
                        {row[item.field]}
                      </TableCell>
                    );
                  } else {
                    return (
                      <TableCell align="left">{getField(item, row)}</TableCell>
                    );
                  }
                })}
                <Box sx={{ position: "relative" }}>
                  {row.id === actionId && (
                    <IconButton
                      sx={{
                        position: "absolute",
                        left: "-100px",
                        top: "3px",
                      }}
                      aria-label="edit"
                      size="large"
                      onClick={() => {
                        props.onClickView && props.onClickView(actionId);
                      }}
                    >
                      <Visibility />
                    </IconButton>
                  )}
                </Box>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default OrderDetails;
