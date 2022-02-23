import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WeatherChart({ hourlyData }) {
  if (!hourlyData) {
    return <div>Loading Chart!</div>;
  }
  const tempFull = [];
  const labels = [];
  hourlyData.forEach((entry, i) => {
    tempFull.push(entry.temp);
    labels.push(i);
  });
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "temprature in Degree Celcius",
        data: tempFull,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  console.log(tempFull);

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}
export default WeatherChart;
