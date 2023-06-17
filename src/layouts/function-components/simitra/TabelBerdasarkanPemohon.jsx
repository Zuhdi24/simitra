import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "No.",
    minWidth: 50,
    headerAlign: "center",
  },
  {
    field: "asal_pemohon",
    headerName: "Asal Pemohon",
    minWidth: 150,
    headerAlign: "center",
  },
  {
    field: "nama_kegiatan",
    headerName: "Nama Kegiatan",
    minWidth: 200,
    headerAlign: "center",
  },
  {
    field: "jenis_kegiatan",
    headerName: "Jenis Kegiatan",
    minWidth: 200,
    headerAlign: "center",
  },
  {
    field: "tanggal_mengajukan",
    headerName: "Tanggal Mengajukan",
    minWidth: 150,
    headerAlign: "center",
    textAlign: "center",
  },
  {
    field: "tanggal_selesai_proses",
    headerName: "Tanggal Selesai Proses",
    minWidth: 150,
    headerAlign: "center",
    textAlign: "center",
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 150,
    headerAlign: "center",
  },
];

export default function TabelBerdasarkanPemohon(rows) {
  return (
    <div style={{ height: 500, width: "100%" }} className="bg-white">
      <DataGrid
        rows={rows.rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        getRowHeight={() => "auto"}
        sx={{
          fontFamily: "Poppins",
          "& .MuiDataGrid-columnHeaderTitle": {
            whiteSpace: "normal",
            lineHeight: "normal",
            textAlign: "center",
          },
          "& .MuiDataGrid-columnHeader": {
            // Forced to use important since overriding inline styles
            height: "unset !important",
          },
          "& .MuiDataGrid-columnHeaders": {
            // Forced to use important since overriding inline styles
            maxHeight: "168px !important",
          },
        }}
      />
      {/* {console.log(rows.rows)} */}
    </div>
  );
}
