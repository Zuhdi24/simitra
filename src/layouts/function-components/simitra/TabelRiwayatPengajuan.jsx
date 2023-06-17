import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
  },
});

// // ...
// return (

//     <CssBaseline />
//     <Box
//       sx={{
//         fontFamily: 'Raleway',
//       }}
//     >
//       Raleway
//     </Box>
//   </ThemeProvider>
// );

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
    minWidth: 150,
    headerAlign: "center",
  },
  {
    field: "nama_kegiatan",
    headerName: "Nama Pelatihan",
    minWidth: 200,
    headerAlign: "center",
  },
  {
    field: "jenis_kegiatan",
    headerName: "Jenis Pelatihan",
    minWidth: 200,
    headerAlign: "center",
  },
  {
    field: "tanggal_mengajukan",
    headerName: "Tanggal Mengajukan",
    minWidth: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "tanggal_selesai_proses",
    headerName: "Tanggal Selesai Proses",
    minWidth: 150,
    headerAlign: "center",
    textAlign: "center",
    align: "center",
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 150,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "action",
    headerName: "Rincian",
    width: 100,
    sortable: false,
    headerAlign: "center",
    align: "center",
    // disableClickEventBubbling: true,
    renderCell: (params) => {
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      // const onClick = (e) => {
      //   const currentRow = params.row;
      //   return alert(JSON.stringify(currentRow, null, 4));
      // };

      return (
        <>
          <Button
            onClick={handleOpen}
            title="Rincian"
            sx={{
              padding: "0px",
              width: "max-content",
              minWidth: "unset",
              fontSize: "1.5rem",
            }}
          >
            <i className="fa-solid fa-circle-info"></i>
          </Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Fade in={open}>
                <Box sx={style}>
                  <Typography
                    id="title_utama"
                    variant="h4"
                    sx={{ marginBottom: "20px" }}
                  >
                    Rincian Pelatihan
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography
                        id="title_asal_pemohon"
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Asal Pemohon
                      </Typography>
                      <Typography
                        id="value_asal_pemohon"
                        variant="body2"
                        className="rounded-lg border-2 px-5 py-2"
                      >
                        {params.row.asal_pemohon}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Typography
                        id="title_nama_pelatihan"
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Nama Pelatihan
                      </Typography>
                      <Typography
                        id="value_nama_pelatihan"
                        variant="body2"
                        className="rounded-lg border-2 px-5 py-2"
                      >
                        {params.row.nama_kegiatan}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        id="title_jenis_pelatihan"
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Jenis Pelatihan
                      </Typography>
                      <Typography
                        id="value_jenis_pelatihan"
                        variant="body2"
                        className="rounded-lg border-2 px-5 py-2"
                      >
                        {params.row.jenis_kegiatan}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        id="title_metode_pembelajaran"
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Metode Pembelajaran
                      </Typography>
                      <Typography
                        id="value_metode_pembelajaran"
                        variant="body2"
                        className="rounded-lg border-2 px-5 py-2"
                      >
                        {params.row.metode_pembelajaran}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        id="title_anggaran"
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Anggaran
                      </Typography>
                      <Typography
                        id="value_anggaran"
                        variant="body2"
                        className="rounded-lg border-2 px-5 py-2"
                      >
                        {params.row.anggaran}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Typography
                        id="title_target_peserta"
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Target Peserta
                      </Typography>
                      <Typography
                        id="value_target_peserta"
                        variant="body2"
                        className="rounded-lg border-2 px-5 py-2"
                      >
                        {params.row.target_peserta}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Typography
                        id="title_tanggal_pelaksanaan"
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Tanggal Pelaksanaan
                      </Typography>
                      <Typography
                        id="value_tanggal_pelaksanaan"
                        variant="body2"
                        className="rounded-lg border-2 px-5 py-2"
                      >
                        {params.row.tanggal_pelaksanaan}
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <Typography
                        id="title_jumlah_hari"
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                      >
                        {" "}
                        Jumlah Hari
                      </Typography>
                      <Typography
                        id="value_jumlah_hari"
                        variant="body2"
                        className="rounded-lg border-2 px-5 py-2"
                      >
                        {params.row.jumlah_hari}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        id="title_sumber_anggaran"
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Sumber Anggaran
                      </Typography>
                      <Typography
                        id="value_sumber_anggaran"
                        variant="body2"
                        className="rounded-lg border-2 px-5 py-2"
                      >
                        {params.row.sumber_anggaran}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography
                        id="title_peserta"
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Peserta
                      </Typography>
                      <Typography
                        id="value_peserta"
                        variant="body2"
                        className="rounded-lg border-2 px-5 py-2"
                      >
                        {params.row.target_peserta}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        id="title_tempat_pelaksanaan"
                        variant="body2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Tempat Pelaksanaan
                      </Typography>
                      <Typography
                        id="value_tempat_pelaksanaan"
                        variant="body2"
                        className="rounded-lg border-2 px-5 py-2"
                      >
                        {params.row.tempat_pelaksanaan}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{ width: "max-content" }}
                      >
                        <Button
                          variant="contained"
                          startIcon={<DeleteIcon />}
                          disableElevation
                          href={params.row.link_sp}
                        >
                          Surat Pengantar
                        </Button>
                        <Button
                          variant="contained"
                          startIcon={<SendIcon />}
                          href={params.row.link_proposal}
                        >
                          Proposal
                        </Button>
                        {params.row.link_rekomendasi != "" ? (
                          <Button
                            variant="contained"
                            startIcon={<SendIcon />}
                            href={params.row.link_rekomendasi}
                          >
                            Rekomendasi
                          </Button>
                        ) : (
                          ""
                        )}
                        {params.row.link_laporan != "" ? (
                          <Button
                            variant="contained"
                            startIcon={<SendIcon />}
                            href={params.row.link_laporan}
                          >
                            Laporan
                          </Button>
                        ) : (
                          ""
                        )}
                      </Stack>
                    </Grid>
                  </Grid>
                </Box>
              </Fade>
            </ThemeProvider>
          </Modal>
        </>
      );
    },
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TabelRiwayatPengajuan(rows) {
  return (
    <>
      <div style={{ height: 500, width: "100%" }} className="rounded-xl p-3">
        <h1 className="h5 my-5 text-center">
          Rekap Data Pengajuan Rekomendasi Pelatihan
        </h1>

        <DataGrid
          rows={rows.rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 20]}
          getCellClassName={(params) => {
            if (params.field === "status") {
              if (params.value == null) {
                return "";
              } else if (params.value == "Selesai") {
                return "selesai";
              } else if (params.value.includes("Menunggu")) {
                return "menunggu";
              } else if (params.value.includes("Sudah")) {
                return "sudah";
              } else if (params.value.includes("Evaluasi")) {
                return "evaluasi";
              } else if (params.value == "Revisi") {
                return "revisi";
              } else {
                return "belum";
              }
            } else {
              return "";
            }
          }}
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
              maxHeight: "168px !important",
            },
            "& .selesai .MuiDataGrid-cellContent": {
              color: "white",
              backgroundColor: "blue",
              textAlign: "center",
              overflow: "auto",
              whiteSpace: "normal",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding: "5px 15px",
            },
            "& .menunggu": {
              padding: "5px 10px",
            },
            "& .menunggu .MuiDataGrid-cellContent": {
              // color: "black",
              // border: "2px solid blue",
              backgroundColor: "#d1be9c",
              textAlign: "center",
              overflow: "auto",
              whiteSpace: "normal",
              borderRadius: "10px",
              // height: "100%",
              display: "flex",
              alignItems: "center",
            },
            "& .belum .MuiDataGrid-cellContent": {
              color: "white",
              backgroundColor: "red",
              textAlign: "center",
              overflow: "auto",
              whiteSpace: "normal",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
            },
            "& .revisi .MuiDataGrid-cellContent": {
              color: "white",
              backgroundColor: "red",
              textAlign: "center",
              overflow: "auto",
              whiteSpace: "normal",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding: "5px 15px",
            },
            "& .sudah .MuiDataGrid-cellContent": {
              color: "white",
              backgroundColor: "green",
              textAlign: "center",
              overflow: "auto",
              whiteSpace: "normal",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
            },
            "& .evaluasi .MuiDataGrid-cellContent": {
              backgroundColor: "orange",
              textAlign: "center",
              overflow: "auto",
              whiteSpace: "normal",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              padding: "0px 10px",
            },
          }}
        />
        {/* {console.log(rows.rows)} */}
      </div>
    </>
  );
}
