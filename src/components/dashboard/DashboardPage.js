import React from "react";
import "./DashboardPage.css";
import MainPage from "../main/MainPage";
import FooterPage from '../footer/FooterPage'
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <MainPage />
        <FooterPage/>
      </div>
    </div>
  );
};

export default Dashboard;
