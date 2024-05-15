import Dashboard from './components/Dashboard';
import StatusPieChart from './components/StatusPieChart';
import Navbar from './components/Navbar';
import React from 'react';
import './App.css'; // Import CSS file for global styles

function App() {
  return (
    
      <div className="app">
        <Navbar />
        <StatusPieChart/>
        <Dashboard />
      </div>
    
  );
}

export default App;
