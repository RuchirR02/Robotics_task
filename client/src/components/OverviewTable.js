
import React from 'react';
import '../styles/Dashboard.css';

function OverviewTable({ data }) {
  return (
    <div className="overview-table">
      <h2>Overview</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>ID</th>
              <th>Battery Level</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item._id}</td>
                <td>{item.battery_level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OverviewTable;
