// DashBoard.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import "./DashBoard.css";
import ChartBar from "../../Components/Barchart/ChartBar";
import ObjectiveChart from "../../Components/Barchart/ObjectiveChart";
import PerformanceChart from "../../Components/Barchart/PerformanceChart";
import KeyMetrics from "../../Components/keyMetrics/KeyMetrics";
import { useDataContext } from "../DataContext/DataContext";
import caloriesIcon from "../../Images /calories-icon.svg";
import glucidesIcon from "../../Images /glucides-icon.svg";
import lipidesIcon from "../../Images /lipides-icon.svg";
import proteinesIcon from "../../Images /proteines-icon.svg";
const DashBoard = () => {
  const { userId } = useParams();
  const { userData, performanceData } = useDataContext();

  const currentUserData = userData.find((user) => user.id === parseInt(userId));

  return (
    <div>
      <Header />
      <main className="main">
        <SideBar />
        <section className="dashboard">
          <h1 className="dashboard-header-greeting">
            Bonjour{" "}
            <span className="dashboard-header-name">
              {currentUserData?.userInfos.firstName}
            </span>
          </h1>
          <p className="dashboard-header-message">
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </p>
          <div className="dashboard-informations">
            <div>
              <ChartBar userData={currentUserData} />
            </div>
            <div>
              <ObjectiveChart data={currentUserData} />
            </div>
            <div>
              <PerformanceChart
                data={performanceData.find(
                  (performance) => performance.userId === currentUserData.id
                )}
              />
            </div>
            <div className="dashboard-charts">
              <div className="dashboard-charts-calories dashboard-charts-all">
                <KeyMetrics
                  icon={caloriesIcon}
                  name="Calories"
                  value={`${currentUserData?.keyData.calorieCount}g`}
                />
              </div>
              <div className="dashboard-charts-proteines dashboard-charts-all">
                <KeyMetrics
                  icon={proteinesIcon}
                  name="Proteines"
                  value={`${currentUserData?.keyData.proteinCount}g`}
                />
              </div>
              <div className="dashboard-charts-glucides dashboard-charts-all">
                <KeyMetrics
                  icon={glucidesIcon}
                  name="Glucides"
                  value={`${currentUserData?.keyData.carbohydrateCount}g`}
                />
              </div>
              <div className="dashboard-charts-lipides dashboard-charts-all">
                <KeyMetrics
                  icon={lipidesIcon}
                  name="Lipides"
                  value={`${currentUserData?.keyData.lipidCount}g`}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashBoard;
