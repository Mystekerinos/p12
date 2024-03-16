import React from "react";
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

const Dashboard = () => {
  const { userId } = useParams();

  // Utilisation du hook personnalisé pour récupérer les données de l'API
  const { userData, performanceData, activityData, userAverageSessionsData } =
    useApiData(userId);

  console.log("userData:", userData);
  console.log("performanceData:", performanceData);
  console.log("activityData:", activityData);

  // Vérification si les données sont chargées
  if (!userData || !performanceData || !activityData) {
    console.log("passe1");
    return <PageNotFound />;
  }
  console.log("performanceData:", performanceData);

  // if (!Array.isArray(performanceData) || performanceData.length === 0) {
  //   console.log(
  //     "passe2",
  //     !Array.isArray(performanceData),
  //     performanceData.length === 0,
  //     performanceData
  //   );
  //   return <PageNotFound />;
  // }

  // Récupération des données de l'utilisateur courant
  const currentUserData = userData;
  const userPerformanceData = performanceData;
  const userActivityData = activityData;
  const userAverageSessionsDataM = userAverageSessionsData;
  // const currentUserData = userData.find((user) => user.id === parseInt(userId));
  // const userPerformanceData = performanceData
  //   ? performanceData.find((user) => user.userId === parseInt(userId))
  //   : null;
  // const userActivityData = activityData.find(
  //   (user) => user.userId === parseInt(userId)
  // );
  console.log("currentUserData:", currentUserData);
  console.log("userPerformanceData:", userPerformanceData);
  console.log("userActivityData:", userActivityData);
  // Vérification si l'utilisateur courant existe
  if (!currentUserData || !userPerformanceData || !userActivityData) {
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
                  />{" "}
                  {/* userAverageSessionsData n'est pas défini ici */}
                </div>
                <div className="performance-container">
                  <PerformanceChart performanceData={userPerformanceData} />
                </div>
                <div className="objective-container">
                  <ObjectiveChart objectiveData={currentUserData} />{" "}
                  {/* userObjectiveData n'est pas défini ici */}
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
