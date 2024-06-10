// src/screens/Dashboard.jsx
import React from "react";
import "./ProductDashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Product Dashboard</h1>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-section">
          <h2>Total Products</h2>
          <p>10</p>
        </section>
        <section className="dashboard-section">
          <h2>Sales</h2>
          <p>$1000</p>
        </section>
        <section className="dashboard-section">
          <h2>New Products</h2>
          <p>3</p>
        </section>
        <section className="dashboard-section">
          <h2>Revenue</h2>
          <p>$5000</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
