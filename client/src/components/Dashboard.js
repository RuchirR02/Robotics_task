
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyChartComponent from './MyChartComponent';
import '../styles/Dashboard.css';

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/data');
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  return (
    <div className="Dashboard" >
      <h2>Robotic Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card-container">
          {data.map((item, index) => (
            <div key={index} className="robot-card">
              <h4>Robo ID: {item._id}</h4>
              <MyChartComponent batteryLevel={item.battery_level} />
              <p>Status: {item.status}</p>
              <table>
                <thead>
                  <tr>
                    <th>Logs</th>
                  </tr>
                </thead>
                <tbody>
                  {item.logs.map((log, idx) => (
                    <tr key={idx}>
                      <td>{log}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
