import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "P. Teknis",
        "P. Fungsional",
        "P. Dasar",
        "Prajabatan",
        "PKA",
        "PKP",
        "Orientasi PPPK",
        "OPD",
        "BIMTEK",
        "Workshop",
        "Seminar",
        "Lokakarya",
        "Pendalaman Tugas Anggota Dewan",
        "Orientasi Anggota Dewan",
      ],
      datasets: [
        {
          //   label: "Sales $",
          data: [7, 0, 46, 0, 2, 5, 0, 0, 0, 0, 0, 0, 57, 0],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(204, 139, 134, 0.4)",
        },
      ],
    });
    setChartOptions({
      plugins: {
        // legend: {
        //   position: "top",
        // },
        title: {
          display: true,
          text: "Total: 117 Pengajuan",
        },
      },
      maintainAspectRatio: false,
      responsive: false,
      scales: {
        xAxes: [
          {
            barThickness: 6, // number (pixels) or 'flex'
            maxBarThickness: 8, // number (pixels)
          },
        ],
      },
    });
  }, []);

  return (
    <>
      <div className="relative m-auto h-[70vh] w-max overflow-x-scroll rounded-lg border bg-white p-4 md:col-span-2">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
