import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import "./DashBoard.css";
import ActivityBar from "../../Components/Barchart/ActivityBar";
import React, { useState } from "react";
import KeyMetrics from "../../Components/keyMetrics/KeyMetrics";
import caloriesIcon from "../../Images /calories-icon.svg";
import glucidesIcon from "../../Images /glucides-icon.svg";
import lipidesIcon from "../../Images /lipides-icon.svg";
import proteinesIcon from "../../Images /proteines-icon.svg";
import AvgSessionsChart from "../../Components/Barchart/AvgSessionsChart";
import ObjectiveChart from "../../Components/Barchart/ObjectiveChart";
import PerformanceChart from "../../Components/Barchart/PerformanceChart";
import PageNotFound from "../PageNotFound/PageNotFound";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../data/data";
const DashBoard = () => {
  const { userId } = useParams();

  const [userData] = useState(USER_MAIN_DATA);
  const [objectiveData] = useState(USER_MAIN_DATA);
  const [performanceData] = useState(USER_PERFORMANCE);
  const [activityData] = useState(USER_ACTIVITY);
  const [AverageSessionsData] = useState(USER_AVERAGE_SESSIONS);
  const currentUserData = userData.find((user) => user.id === parseInt(userId));
  const userperformanceData = performanceData.find(
    (user) => user.userId === parseInt(userId)
  );
  const userObjectiveData = objectiveData.find(
    (user) => user.id === parseInt(userId)
  );
  const userActivityData = activityData.find(
    (user) => user.userId === parseInt(userId)
  );
  const userAverageSessionsData = AverageSessionsData.find(
    (user) => user.userId === parseInt(userId)
  );
  if (!currentUserData) {
    return <PageNotFound />;
  }
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
            <div className="dashboard-charts">
              <div
                className="activity-container"
                style={{ width: "100%", height: "400px" }}
              >
                <ActivityBar userActivity={userActivityData} />
              </div>
              <div className="dashboard-charts-avgSession-objective-performance">
                <div className="avgSessions-container">
                  <AvgSessionsChart
                    userAverageSessions={userAverageSessionsData}
                  />
                </div>
                <div className="performance-container">
                  <PerformanceChart performanceData={userperformanceData} />
                </div>
                <div className="objective-container">
                  <ObjectiveChart objectiveData={userObjectiveData} />
                </div>
              </div>
            </div>
            <div className="dashboard-charts-calories-proteines-glucides-lipides">
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
