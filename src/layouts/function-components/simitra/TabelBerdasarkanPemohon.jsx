import * as React from "react";
// import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "No.",
    minWidth: 50,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "asal_pemohon",
    headerName: "Asal Pemohon",
    minWidth: 250,
    headerAlign: "center",
  },
  {
    field: "total_pengajuan",
    headerName: "Total Pengajuan",
    minWidth: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "p_teknis",
    headerName: "P. Teknis",
    minWidth: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "p_fungsional",
    headerName: "P. Fungsional",
    minWidth: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "p_dasar",
    headerName: "P. Dasar",
    minWidth: 100,
    headerAlign: "center",
    textAlign: "center",
    align: "center",
  },
  {
    field: "pka",
    headerName: "PKA",
    minWidth: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "pkp",
    headerName: "PKP",
    minWidth: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "orientasi_pppk",
    headerName: "Orientasi PPPK",
    minWidth: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "seminar",
    headerName: "Seminar",
    minWidth: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "pendalaman_bimtek",
    headerName: "Pendalaman Tugas Dewan (Bimtek)",
    minWidth: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "pendalaman_workshop",
    headerName: "Pendalaman Tugas Dewan (Workshop)",
    minWidth: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "orient_angg_dewan",
    headerName: "Orientasi Anggota Dewan",
    minWidth: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "prajabatan",
    headerName: "Prajabatan",
    minWidth: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "bimtek",
    headerName: "BIMTEK",
    minWidth: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "workshop",
    headerName: "Workshop",
    minWidth: 100,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "lokakarya",
    headerName: "Lokakarya",
    minWidth: 100,
    headerAlign: "center",
    align: "center",
  },
];

export default function TabelBerdasarkanPemohon(rows) {
  return (
    <div style={{ height: 600, width: "100%" }} className="bg-white">
      <DataGrid
        rows={rows.rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
        sx={{
          fontFamily: "Poppins",
          height: "80%",
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
            maxHeight: "250px !important",
          },
        }}
      />
    </div>
  );
}
