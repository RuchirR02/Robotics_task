// SomeOtherComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OverviewTable from './OverviewTable';

function SomeOtherComponent() {
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
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <OverviewTable data={data} />
      )}
    </div>
  );
}

export default SomeOtherComponent;
