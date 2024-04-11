import React from 'react';
import Styles from '../../src/Styles/dashboard.module.css'
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>Home</li>
          <li>Analytics</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="main-content">
        <h2>Welcome to your Dashboard</h2>
        <p>Here you can manage all your data and settings.</p>
      </div>
    </div>
  );
}

export default Dashboard;
