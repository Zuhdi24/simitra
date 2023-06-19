import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import CssBaseline from "@mui/material/CssBaseline";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function RincianModal(params) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div>
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
                    {data.asal_pemohon}
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
                    {data.nama_kegiatan}
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
                    {data.jenis_kegiatan}
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
                    {data.metode_pembelajaran}
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
                    {data.anggaran}
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
                    {data.target_peserta}
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
                    {data.tanggal_pelaksanaan}
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
                    {data.jumlah_hari}
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
                    {data.sumber_anggaran}
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
                    {data.target_peserta}
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
                    {data.tempat_pelaksanaan}
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
                      href={data.link_sp}
                    >
                      Surat Pengantar
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<SendIcon />}
                      href={data.link_proposal}
                    >
                      Proposal
                    </Button>
                    {data.link_rekomendasi != "" ? (
                      <Button
                        variant="contained"
                        startIcon={<SendIcon />}
                        href={data.link_rekomendasi}
                      >
                        Rekomendasi
                      </Button>
                    ) : (
                      ""
                    )}
                    {data.link_laporan != "" ? (
                      <Button
                        variant="contained"
                        startIcon={<SendIcon />}
                        href={data.link_laporan}
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
    </div>
  );
}
