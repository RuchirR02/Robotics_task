import Dashboard from './components/Dashboard';
import StatusPieChart from './components/StatusPieChart';
import Navbar from './components/Navbar';
import React from 'react';
import './App.css'; // Import CSS file for global styles
import SomeOtherComponent from './components/SomeOtherComponent';

function App() {
  return (
    
      <div className="app">
        <Navbar />
        <div className="content-container">
        <StatusPieChart />
        <SomeOtherComponent />
      </div>
        <Dashboard />
      </div>
    
  );
}

export default App;
