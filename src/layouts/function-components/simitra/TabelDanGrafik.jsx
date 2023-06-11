import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import DiagramBatang from "@layouts/function-components/simitra/DiagramBatang.jsx";
import TabelBerdasarkanPemohon from "@layouts/function-components/simitra/TabelBerdasarkanPemohon.jsx";

export default function TabelDanGrafik(rows) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", typography: "body1", fontFamily: "primary" }}
      className="bg-white"
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Berdasarkan Jenis Pelatihan" value="1" />
            <Tab label="Berdasarkan Pemohon" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          Item One
          <DiagramBatang />
        </TabPanel>
        <TabPanel value="2">
          Item Two
          <TabelBerdasarkanPemohon rows={rows} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
