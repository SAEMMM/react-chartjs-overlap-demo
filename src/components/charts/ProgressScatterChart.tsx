import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import {
  progressValues,
  shopActualValues,
  bimActualValues,
  shopProjectedValues,
  bimProjectedValues,
  budgetMax,
} from "../../data/mockData";
import { buildSeriesSegments } from "../../utils/chartData";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

// 현재 실제 데이터가 존재하는 마지막 index
const currentIndex = 4; // 60%

const shopSeries = buildSeriesSegments({
  xValues: progressValues,
  actualValues: shopActualValues,
  projectedValues: shopProjectedValues,
  currentIndex,
});

const bimSeries = buildSeriesSegments({
  xValues: progressValues,
  actualValues: bimActualValues,
  projectedValues: bimProjectedValues,
  currentIndex,
});

const budgetPoints = progressValues.map((x) => ({
  x,
  y: budgetMax,
}));

const data: ChartData<"scatter", { x: number; y: number }[], number> = {
  datasets: [
    {
      type: "scatter",
      label: "샵 실적",
      data: shopSeries.actualPoints,
      borderColor: "#5B7FFF",
      backgroundColor: "#5B7FFF",
      showLine: true,
      borderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 5,
    },
    {
      type: "scatter",
      label: "샵 예상",
      data: shopSeries.projectedPoints,
      borderColor: "#5B7FFF",
      backgroundColor: "#5B7FFF",
      showLine: true,
      borderWidth: 2,
      borderDash: [8, 4],
      pointRadius: 0,
      pointHoverRadius: 0,
    },
    {
      type: "scatter",
      label: "BIM 실적",
      data: bimSeries.actualPoints,
      borderColor: "#35C48B",
      backgroundColor: "#35C48B",
      showLine: true,
      borderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 5,
    },
    {
      type: "scatter",
      label: "BIM 예상",
      data: bimSeries.projectedPoints,
      borderColor: "#35C48B",
      backgroundColor: "#35C48B",
      showLine: true,
      borderWidth: 2,
      borderDash: [8, 4],
      pointRadius: 0,
      pointHoverRadius: 0,
    },
    {
      type: "scatter",
      label: "실행 예산",
      data: budgetPoints,
      borderColor: "rgba(255, 124, 124, 0.75)",
      backgroundColor: "rgba(255, 124, 124, 0.75)",
      showLine: true,
      borderWidth: 1.5,
      borderDash: [4, 4],
      pointRadius: 0,
      pointHoverRadius: 0,
    },
  ],
};

const options: ChartOptions<"scatter"> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "nearest",
    intersect: false,
  },
  scales: {
    x: {
      type: "linear",
      min: 0,
      max: 100,
      ticks: {
        stepSize: 10,
        callback: (value) => `${value}%`,
      },
      title: {
        display: true,
        text: "진행률",
      },
      grid: {
        color: "#E5E7EB",
      },
    },
    y: {
      min: 0,
      title: {
        display: true,
        text: "물량",
      },
      grid: {
        color: "#E5E7EB",
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label(context) {
          const label = context.dataset.label ?? "";
          const raw = context.raw as { x: number; y: number };
          return `${label}: ${raw.y} (${raw.x}%)`;
        },
      },
    },
  },
};

export function ProgressScatterChart() {
  return (
    <div style={{ height: 420 }}>
      <Scatter data={data} options={options} />
    </div>
  );
}
