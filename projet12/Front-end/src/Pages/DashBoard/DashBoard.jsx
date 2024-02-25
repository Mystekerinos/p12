import React from "react";
import { useParams } from "react-router-dom"; // Importez useParams depuis react-router-dom
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import "./DashBoard.css";
import Activitychart from "../../Components/Barchart/Activitychart";
import AvgSessionsChart from "../../Components/Barchart/AvgSessionsChart";
import PerformanceChart from "../../Components/Barchart/PerformanceChart";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_PERFORMANCE,
  USER_AVERAGE_SESSIONS,
} from "../../data/data";
import KeyMetrics from "../../Components/keyMetrics/KeyMetrics";
import caloriesIcon from "../../Images /calories-icon.svg"; // Corrigez les chemins d'importation en supprimant les espaces
import glucidesIcon from "../../Images /glucides-icon.svg";
import lipidesIcon from "../../Images /lipides-icon.svg";
import proteinesIcon from "../../Images /proteines-icon.svg";

const DashBoard = () => {
  const { userId } = useParams(); // Utilisez useParams pour obtenir l'ID de l'utilisateur depuis l'URL

  // Trouver les données de l'utilisateur avec l'ID correspondant
  const userData = USER_MAIN_DATA.find((user) => user.id === parseInt(userId));

  return (
    <div>
      <Header />
      <main className="main">
        <SideBar />
        <section className="dashboard">
          {/* Utilisez userData pour afficher les données de l'utilisateur */}
          <div key={userData.id} className="dashboard-header">
            <h1 className="dashboard-header-greeting">
              Bonjour{" "}
              <span className="dashboard-header-name">
                {userData.userInfos.firstName}
              </span>
            </h1>
            <p className="dashboard-header-message">
              Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
            <div className="dashboard-informations">
              <div>
                <Activitychart
                  userData={USER_ACTIVITY.find(
                    (activity) => activity.userId === userData.id
                  )}
                />
              </div>
              <div>
                <AvgSessionsChart
                  data={USER_AVERAGE_SESSIONS.find(
                    (sessions) => sessions.userId === userData.id
                  )}
                />
              </div>
              <div>
                <PerformanceChart
                  data={USER_PERFORMANCE.find(
                    (performance) => performance.userId === userData.id
                  )}
                />
              </div>
              <div className="dashboard-charts">
                <div className="dashboard-charts-calories dashboard-charts-all">
                  <KeyMetrics
                    icon={caloriesIcon}
                    name="Calories"
                    value={`${userData.keyData.calorieCount}g`}
                  />
                </div>
                <div className="dashboard-charts-proteines dashboard-charts-all">
                  <KeyMetrics
                    icon={proteinesIcon}
                    name="Proteines"
                    value={`${userData.keyData.proteinCount}g`}
                  />
                </div>
                <div className="dashboard-charts-glucides dashboard-charts-all">
                  <KeyMetrics
                    icon={glucidesIcon}
                    name="Glucides"
                    value={`${userData.keyData.carbohydrateCount}g`}
                  />
                </div>
                <div className="dashboard-charts-lipides dashboard-charts-all">
                  <KeyMetrics
                    icon={lipidesIcon}
                    name="Lipides"
                    value={`${userData.keyData.lipidCount}g`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashBoard;
