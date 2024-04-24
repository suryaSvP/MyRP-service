import { styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const VDataGrid =
  styled(DataGrid) <
  DataGrid >
  (({ theme }) => ({
    "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus":
      {
        outline: "none",
      },
  }));

export default VDataGrid;
