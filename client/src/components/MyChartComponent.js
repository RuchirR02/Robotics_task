// MyChartComponent.js

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function MyChartComponent({ batteryLevel }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Battery Level', 'Remaining'],
        datasets: [{
          label: 'Battery Level',
          data: [batteryLevel, 100 - batteryLevel],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        cutout: '80%',
      }
    });

    // Return a cleanup function to destroy the chart when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, [batteryLevel]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default MyChartComponent;
