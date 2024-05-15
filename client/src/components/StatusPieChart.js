import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import '../styles/Dashboard.css';

function StatusPieChart() {
  const [statusData, setStatusData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/data');
      console.log('Data:', response.data);

      // Extract status data from the response
      const data = response.data;
      const statusCount = {
        idle: 0,
        active: 0,
        charging: 0
      };

      data.forEach(item => {
        statusCount[item.status]++;
      });

      setStatusData(statusCount);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const pieChartData = {
    labels: Object.keys(statusData),
    datasets: [
      {
        data: Object.values(statusData),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
      },
    ],
  };

  return (
    <div className='Dashboard'>
      <h2>Status Distribution</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="status-pie-chart">
          <Pie data={pieChartData} />
        </div>
      )}
    </div>
  );
}

export default StatusPieChart;
