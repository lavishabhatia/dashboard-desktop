import React from "react";
import Header from "../ui/Header";
import DashboardFooter from "../ui/DashboardFooter";
import MainContainer from "./MainContainer";
import DateTime from "./DateTime";

const Dashboard = () => {
  return (
    <div>
      <div className="h-screen w-screen relative flex items-start justify-center z-40">
        <Header />
        <DateTime />
        <MainContainer />
        <DashboardFooter />
      </div>
    </div>
  );
};

export default Dashboard;
