import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import {
  labels,
  serviceAData,
  serviceBData,
  serviceCData,
} from "../../data/mockData";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
);

const data = {
  labels,
  datasets: [
    {
      label: "Service A",
      data: serviceAData,
      borderColor: "#1976d2",
      backgroundColor: "rgba(25, 118, 210, 0.2)",
      tension: 0.4,
    },
    {
      label: "Service B",
      data: serviceBData,
      borderColor: "#d32f2f",
      backgroundColor: "rgba(211, 47, 47, 0.2)",
      tension: 0.4,
    },
    {
      label: "Service C",
      data: serviceCData,
      borderColor: "#2e7d32",
      backgroundColor: "rgba(46, 125, 50, 0.2)",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    tooltip: {
      mode: "index" as const,
      intersect: false,
    },
  },
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
};

export function OverlapLineChart() {
  return <Line data={data} options={options} />;
}
