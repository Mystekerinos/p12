import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import useApiData from "../../utils/useApiData";
import "./DashBoard.css";
import ActivityBar from "../../Components/Barchart/ActivityBar";
import KeyMetrics from "../../Components/KeyMetrics/KeyMetrics";
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

const Dashboard = () => {
  const { userId } = useParams();
  const [useApi, setUseApi] = useState(true);

  // Données mockées
  const [userDataMock] = useState(USER_MAIN_DATA);
  const [performanceDataMock] = useState(USER_PERFORMANCE);
  const [activityDataMock] = useState(USER_ACTIVITY);
  const [averageSessionsMock] = useState(USER_AVERAGE_SESSIONS);

  // Utilisation du hook personnalisé pour récupérer les données de l'API
  const { userData, performanceData, activityData, averageSessions } =
    useApiData(userId);

  // Récupération des données en fonction de l'état useApi
  const currentUserData = useApi
    ? userData
    : userDataMock.find((user) => user.id === parseInt(userId));
  const userPerformanceData = useApi
    ? performanceData
    : performanceDataMock.find((user) => user.userId === parseInt(userId));
  const userActivityData = useApi
    ? activityData
    : activityDataMock.find((user) => user.userId === parseInt(userId));
  const userAverageSessionsData = useApi
    ? averageSessions
    : averageSessionsMock.find((user) => user.userId === parseInt(userId));

  // Vérification si les données sont chargées
  if (!userData || !performanceData || !activityData || !averageSessions) {
    return <PageNotFound />;
  }

  // Vérification si l'utilisateur courant existe
  if (
    !currentUserData ||
    !userPerformanceData ||
    !userActivityData ||
    !userAverageSessionsData
  ) {
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
          <label>
            Utiliser les données de l'API :
            <input
              type="checkbox"
              checked={useApi}
              onChange={() => setUseApi(!useApi)}
            />
          </label>
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
                  />{" "}
                </div>
                <div className="performance-container">
                  <PerformanceChart performanceData={userPerformanceData} />
                </div>
                <div className="objective-container">
                  <ObjectiveChart objectiveData={currentUserData} />{" "}
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

export default Dashboard;
