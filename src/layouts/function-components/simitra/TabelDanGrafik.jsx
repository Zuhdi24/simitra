import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// import * as React from 'react';
import Tabs from "@mui/material/Tabs";
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

import DiagramBatang from "@layouts/function-components/simitra/DiagramBatang.jsx";
import TabelBerdasarkanPemohon from "@layouts/function-components/simitra/TabelBerdasarkanPemohon.jsx";

const rows = await fetch(
  "https://zuhdiali.me/static-api-simitra/rekomendasi-kegiatan.json"
).then((res) => res.json());

export default function TabelDanGrafik() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One">
          test
          <DiagramBatang />
        </Tab>
        <Tab value="two" label="Item Two">
          <TabelBerdasarkanPemohon rows={rows} />
        </Tab>
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
  );

  // const [value, setValue] = React.useState("1");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // return (
  //   <Box
  //     sx={{ width: "100%", typography: "body1", fontFamily: "primary" }}
  //     className="bg-white"
  //   >
  //     <TabContext value={value} textColor="secondary">
  //       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
  //         <TabList onChange={handleChange} aria-label="lab API tabs example">
  //           <Tab label="Berdasarkan Jenis Pelatihan" value="1" />
  //           <Tab label="Berdasarkan Pemohon" value="2" />
  //         </TabList>
  //       </Box>
  //       <TabPanel value="1">
  //         Item One
  //         <DiagramBatang />
  //       </TabPanel>
  //       <TabPanel value="2">
  //         Item Two
  //         <TabelBerdasarkanPemohon rows={rows} />
  //       </TabPanel>
  //     </TabContext>
  //   </Box>
  // );
}
