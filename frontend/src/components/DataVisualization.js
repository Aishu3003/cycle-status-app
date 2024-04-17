import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const DataVisualization = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data');
        setData(response.data);
        renderChart(response.data);
      } catch (err) {
        console.error(err);
        alert('Error fetching data');
      }
    };

    fetchData();
  }, []);

  const renderChart = (data) => {
    const timestamps = data.map((item) => item.timestamp);
    const samples = data.map((item) => item.sample);

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: timestamps,
        datasets: [{
          label: 'Sample Data',
          data: samples,
          borderColor: 'blue',
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  };

  return (
    <div>
      <h2>Data Visualization</h2>
      <canvas id="myChart" width="800" height="400"></canvas>
    </div>
  );
};

export default DataVisualization;
