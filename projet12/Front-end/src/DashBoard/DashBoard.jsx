import React from "react";
import Header from "../Components/Header/Header";
import SideBar from "../Components/SideBar/SideBar";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <SideBar />
        <section className="dashboard">
          <div className="dashboard-header">
            <h1 className="dashboard-header-greeting">
              Bonjour <span className="dashboard-header-name">{"Thomas"}</span>
            </h1>
            <p className="dashboard-header-message">
              Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashBoard;
