import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  floorLabels,
  bimCurrent,
  bimTarget,
  shopCurrent,
  shopEstimate,
} from "../../data/mockData";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data: ChartData<"bar", number[], string> = {
  labels: floorLabels,
  datasets: [
    {
      type: "bar",
      label: "BIM 현재물량",
      data: bimCurrent,
      backgroundColor: "#1423A3",
      stack: "Stack 0",
      barThickness: 28,
      maxBarThickness: 20,
    },
    {
      type: "bar",
      label: "BIM 목표물량",
      data: bimTarget,
      backgroundColor: "#1423a314",
      borderWidth: 0.5,
      borderColor: "#1a4bd180",
      stack: "Stack 0",
      barThickness: 28,
      maxBarThickness: 20,
    },
    {
      type: "bar",
      label: "샵 현재물량",
      data: shopCurrent,
      backgroundColor: "#638AF4",
      stack: "Stack 1",
      barThickness: 28,
      maxBarThickness: 20,
    },
    {
      type: "bar",
      label: "샵 추정물량",
      data: shopEstimate,
      backgroundColor: "#638af414",
      borderWidth: 0.5,
      borderColor: "#638af466",
      stack: "Stack 1",
      barThickness: 28,
      maxBarThickness: 20,
    },
  ],
};

const options: ChartOptions<"bar"> = {
  responsive: true,
  interaction: {
    intersect: false,
    mode: "index",
    axis: "x",
  },
  elements: {
    bar: {
      borderRadius: 4,
      borderWidth: 0,
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        color: "#7D7B88",
      },
    },
    y: {
      stacked: false,
      ticks: {
        color: "#7D7B88",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
      position: "average",
      yAlign: "center",
      cornerRadius: 8,
      boxPadding: 3,
      boxWidth: 10,
      boxHeight: 10,
      callbacks: {
        afterFooter(context) {
          const bim = (context[0]?.raw as number) ?? 0;
          const bimTotal = (context[1]?.raw as number) ?? 0;
          const shop = (context[2]?.raw as number) ?? 0;
          const shopTotal = (context[3]?.raw as number) ?? 0;

          const bimRate = bimTotal ? (bim / bimTotal) * 100 : 0;
          const shopRate = shopTotal ? (shop / shopTotal) * 100 : 0;

          return `BIM 비율  ${bimRate.toFixed(1)}%\n샵 비율  ${shopRate.toFixed(1)}%`;
        },
      },
    },
  },
};

export function OverlapBarChart() {
  return <Bar data={data} options={options} />;
}
