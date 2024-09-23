import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ data }) {
  const chartData = {
    labels: ['07-02', '07-04', '07-06', '07-08', '07-10', '07-12', '07-14', '07-16'],
    datasets: [
      {
        label: 'Patrimoine',
        data: [0, 0, 0, 30000, 100000, 100000, 90000, 85000],
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Trésorerie',
        data: [0, 0, 0, 5000, 80000, 80000, 70000, 65000],
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Immobilisations',
        data: [60000, 60000, 60000, 60000, 60000, 60000, 60000, 60000],
        borderColor: 'black',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Évolution du patrimoine',
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default Chart;