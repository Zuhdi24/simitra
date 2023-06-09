import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import DescriptionIcon from "@mui/icons-material/Description";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import "./info-publik.css";

const rows = await fetch(
  "https://zuhdiali.me/static-api-simitra/rekomendasi-kegiatan.json"
).then((res) => res.json());

function ButtonInfo(params) {}

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
    minWidth: 200,
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
      // const [open, setOpen] = React.useState(false);
      const onClick = (e) => {
        document.getElementById("value_asal_pemohon").innerHTML =
          params.row.asal_pemohon;
        document.getElementById("value_nama_pelatihan").innerHTML =
          params.row.nama_kegiatan;
        document.getElementById("value_jenis_pelatihan").innerHTML =
          params.row.jenis_kegiatan;
        document.getElementById("value_metode_pembelajaran").innerHTML =
          params.row.metode_pembelajaran;
        document.getElementById("value_anggaran").innerHTML =
          params.row.anggaran;
        document.getElementById("value_target_peserta").innerHTML =
          params.row.target_peserta;
        document.getElementById("value_tanggal_pelaksanaan").innerHTML =
          params.row.tanggal_pelaksanaan;

        document.getElementById("value_jumlah_hari").innerHTML =
          params.row.jumlah_hari;
        document.getElementById("value_sumber_anggaran").innerHTML =
          params.row.sumber_anggaran;
        document.getElementById("value_peserta").innerHTML =
          params.row.target_peserta;
        document.getElementById("value_tempat_pelaksanaan").innerHTML =
          params.row.tempat_pelaksanaan;

        document
          .getElementById("btn_surat_pengantar")
          .setAttribute("href", params.row.link_sp);
        document
          .getElementById("btn_proposal")
          .setAttribute("href", params.row.link_proposal);

        if (params.row.link_rekomendasi != "") {
          document
            .getElementById("btn_rekomendasi")
            .setAttribute("href", params.row.link_rekomendasi);
          document
            .getElementById("btn_rekomendasi")
            .classList.remove("visibi-hidden");
          document
            .getElementById("btn_rekomendasi")
            .classList.add("visibi-visible");
        } else {
          document.getElementById("btn_rekomendasi").setAttribute("href", "");
          document
            .getElementById("btn_rekomendasi")
            .classList.add("visibi-hidden");
          document
            .getElementById("btn_rekomendasi")
            .classList.remove("visibi-visible");
        }

        if (params.row.link_laporan != "") {
          document
            .getElementById("btn_laporan")
            .setAttribute("href", params.row.link_laporan);
          document
            .getElementById("btn_laporan")
            .classList.remove("visibi-hidden");
          document
            .getElementById("btn_laporan")
            .classList.add("visibi-visible");
        } else {
          document.getElementById("btn_laporan").setAttribute("href", "");
          document.getElementById("btn_laporan").classList.add("visibi-hidden");
          document
            .getElementById("btn_laporan")
            .classList.remove("visibi-visible");
        }

        document.getElementById("modal_utama").classList.remove("hidden");
      };

      // const handleOpen = () => setOpen(true);
      // const handleClose = () => setOpen(false);
      // const onClick = (e) => {
      //   const currentRow = params.row;
      //   return alert(JSON.stringify(currentRow, null, 4));
      // };

      return (
        <>
          <Button
            onClick={onClick}
            title="Rincian"
            sx={{
              padding: "0px",
              width: "max-content",
              minWidth: "unset",
              fontSize: "1.5rem",
              color: "#7d4f50",
            }}
          >
            <InfoIcon />
          </Button>
        </>
      );
    },
  },
];

export default function TabelRiwayatPengajuan() {
  return (
    <>
      <div style={{ height: 600, width: "100%" }} className="rounded-xl p-3">
        <Typography
          variant="h5"
          className="text-center"
          sx={{ color: "#7D4F50", fontFamily: "Poppins", marginBottom: "10px" }}
        >
          Rekap Data Pengajuan Rekomendasi Pelatihan
        </Typography>

        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 20]}
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
              fontSize: "12px",
              padding: "2px 18px",
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
              fontSize: "12px",
              width: "max-content",
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
              fontSize: "12px",
              marginX: "10px",
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
              fontSize: "12px",
              marginX: "10px",
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
          disableRowSelectionOnClick
        />

        <div id="modal_utama" className="  hidden ">
          <Box
            sx={{
              position: "fixed", //aslinya posisinya absolute
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "80vw",
              height: "max-content",
              maxHeight: "90vh",
              overflowY: "scroll",
              bgcolor: "background.paper",
              border: "2px solid #7d4f50",
              boxShadow: 24,

              p: 4,
              "& .MuiTypography-root": { color: "#7d4f50" },
              "& .MuiButtonBase-root": { backgroundColor: "#7d4f50" },
              "& .MuiButtonBase-root:hover": { backgroundColor: "#aa998f" },
            }}
            id="konten_modal_utama"
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div className="flex items-center justify-between">
                  <Typography
                    id="title_utama"
                    variant="h4"
                    sx={{ marginBottom: "20px", fontFamily: "Poppins" }}
                  >
                    Rincian Pelatihan
                  </Typography>
                  
                  <Button
                    onClick={() => {
                      document
                        .getElementById("modal_utama")
                        .classList.add("hidden");
                    }}
                    title="Tutup"
                    sx={{
                      padding: "0",
                      width: "max-content",
                      // maxWidth: "25px",
                      // height: "20px",
                      fontSize: "1rem",
                      color: "white",
                      position: "absolute",
                      top: 5,
                      right: 5,
                      // paddingY: "5px",  // ini kalau mau pakai icon
                    }}
                  >
                    X
                    {/* <CloseIcon /> */}
                  </Button>
                </div>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  id="title_asal_pemohon"
                  variant="body2"
                  sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  Asal Pemohon
                </Typography>
                <Typography
                  id="value_asal_pemohon"
                  variant="body2"
                  className="rounded-lg border-2 px-5 py-2"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Tidak ada informasi
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography
                  id="title_nama_pelatihan"
                  variant="body2"
                  sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  Nama Pelatihan
                </Typography>
                <Typography
                  id="value_nama_pelatihan"
                  variant="body2"
                  className="rounded-lg border-2 px-5 py-2"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Tidak ada informasi
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  id="title_jenis_pelatihan"
                  variant="body2"
                  sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  Jenis Pelatihan
                </Typography>
                <Typography
                  id="value_jenis_pelatihan"
                  variant="body2"
                  className="rounded-lg border-2 px-5 py-2"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Tidak ada informasi
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  id="title_metode_pembelajaran"
                  variant="body2"
                  sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  Metode Pembelajaran
                </Typography>
                <Typography
                  id="value_metode_pembelajaran"
                  variant="body2"
                  className="rounded-lg border-2 px-5 py-2"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Tidak ada informasi
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  id="title_anggaran"
                  variant="body2"
                  sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  Anggaran
                </Typography>
                <Typography
                  id="value_anggaran"
                  variant="body2"
                  className="rounded-lg border-2 px-5 py-2"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Tidak ada informasi
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  id="title_target_peserta"
                  variant="body2"
                  sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  Target Peserta
                </Typography>
                <Typography
                  id="value_target_peserta"
                  variant="body2"
                  className="rounded-lg border-2 px-5 py-2"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Tidak ada informasi
                </Typography>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography
                  id="title_tanggal_pelaksanaan"
                  variant="body2"
                  sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  Tanggal Pelaksanaan
                </Typography>
                <Typography
                  id="value_tanggal_pelaksanaan"
                  variant="body2"
                  className="rounded-lg border-2 px-5 py-2"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Tidak ada informasi
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Typography
                  id="title_jumlah_hari"
                  variant="body2"
                  sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  {" "}
                  Jumlah Hari
                </Typography>
                <Typography
                  id="value_jumlah_hari"
                  variant="body2"
                  className="rounded-lg border-2 px-5 py-2"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Tidak ada informasi
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  id="title_sumber_anggaran"
                  variant="body2"
                  sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  Sumber Anggaran
                </Typography>
                <Typography
                  id="value_sumber_anggaran"
                  variant="body2"
                  className="rounded-lg border-2 px-5 py-2"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Tidak ada informasi
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  id="title_peserta"
                  variant="body2"
                  sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  Peserta
                </Typography>
                <Typography
                  id="value_peserta"
                  variant="body2"
                  className="rounded-lg border-2 px-5 py-2"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Tidak ada informasi
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  id="title_tempat_pelaksanaan"
                  variant="body2"
                  sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  Tempat Pelaksanaan
                </Typography>
                <Typography
                  id="value_tempat_pelaksanaan"
                  variant="body2"
                  className="rounded-lg border-2 px-5 py-2"
                  sx={{ fontFamily: "Poppins" }}
                >
                  Tidak ada informasi
                </Typography>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={{ xs: 1, md: 4 }}
                  className="xs:w-auto sm:w-max"
                >
                  <Button
                    variant="contained"
                    // startIcon={<DescriptionIcon />} // ini kalau mau pakai icon
                    disableElevation
                    id="btn_surat_pengantar"
                    href="https://www.google.com"
                    sx={{ fontFamily: "Poppins" }}
                  >
                    Surat Pengantar
                  </Button>
                  <Button
                    variant="contained"
                    // startIcon={<DescriptionIcon />} // ini kalau mau pakai icon
                    id="btn_proposal"
                    href="https://www.google.com"
                    sx={{ fontFamily: "Poppins" }}
                  >
                    Proposal
                  </Button>
                  <Button
                    variant="contained"
                    // startIcon={<DescriptionIcon />} // ini kalau mau pakai icon
                    id="btn_rekomendasi"
                    className="visibi-hidden"
                    href="https://www.google.com"
                    sx={{ fontFamily: "Poppins" }}
                  >
                    Rekomendasi
                  </Button>

                  <Button
                    variant="contained"
                    
                    // startIcon={<DescriptionIcon />} // ini kalau mau pakai icon
                    id="btn_laporan"
                    className="visibi-hidden"
                    href="https://www.google.com"
                    sx={{ fontFamily: "Poppins" }}
                  >
                    Laporan
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
}
