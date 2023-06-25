import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import DiagramBatang from "@layouts/function-components/simitra/DiagramBatang.jsx";
import TabelBerdasarkanPemohon from "@layouts/function-components/simitra/TabelBerdasarkanPemohon.jsx";
import { createTheme } from "@mui/material/styles";

const rows = await fetch(
  "https://zuhdiali.me/static-api-simitra/riwayat-pemohon.json"
).then((res) => res.json());

const theme = createTheme({
  palette: {
    primary: {
      main: "#7d4f50",
    },
    secondary: {
      main: "#d1be9c",
    },
  },
});

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

export default function TabelDanGrafik() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", typography: "body1" }}
      className="rounded-xl bg-white"
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              "& .MuiTabs-indicator": { backgroundColor: "#7d4f50" },
              "& .MuiTab-root": { color: "#7d4f50" },
              "& .MuiTab-root.Mui-selected": { color: "#7d4f50" },
            }}
          >
            <Tab
              sx={{ fontFamily: "Poppins" }}
              label="Berdasarkan Jenis Pelatihan"
              value="1"
            />
            <Tab
              sx={{ fontFamily: "Poppins" }}
              label="Berdasarkan Pemohon"
              value="2"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <h1 className="h5 mb-5 text-center">
            Statistik Pengajuan Rekomendasi Berdasarkan Jenis Pelatihan
          </h1>
          <DiagramBatang />
        </TabPanel>
        <TabPanel value="2">
          <h1 className="h5 mb-5 text-center">
            Jumlah Pengajuan Rekomendasi Berdasarkan Pemohon
          </h1>
          <div className="container p-1">
            <TabelBerdasarkanPemohon rows={rows} />
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
