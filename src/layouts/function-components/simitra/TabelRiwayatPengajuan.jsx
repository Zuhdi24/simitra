import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns_lama = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

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

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function TabelRiwayatPengajuan(rows) {
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
          "& .MuiDataGrid-root": {},
          "& .MuiDataGrid-columnHeaderTitle": {
            whiteSpace: "normal",
            lineHeight: "normal",
            textAlign: "center",
            fontFamily: "Poppins",
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
