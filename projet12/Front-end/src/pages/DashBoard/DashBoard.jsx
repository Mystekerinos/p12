import React from "react";
import PropTypes from "prop-types";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import "../../assets/css/DashBoard.css";
import ActivityBar from "../../components/Barchart/ActivityBar";
import KeyMetrics from "../../components/keyMetrics/KeyMetrics";
import caloriesIcon from "../../assets/images/calories-icon.svg";
import glucidesIcon from "../../assets/images/glucides-icon.svg";
import lipidesIcon from "../../assets/images/lipides-icon.svg";
import proteinesIcon from "../../assets/images/proteines-icon.svg";
import AvgSessionsChart from "../../components/Barchart/AvgSessionsChart";
import ObjectiveChart from "../../components/Barchart/ObjectiveChart";
import PerformanceChart from "../../components/Barchart/PerformanceChart";
import PageNotFound from "../PageNotFound/PageNotFound";
import useFormatData from "../../hooks/useFormatData";
import ReactSwitch from "../../components/Button/ReactSwitch";

/**
 * Component for displaying the user's dashboard.
 * @param {object} props - The props object.
 * @param {string} props.userId - The ID of the user.
 * @returns {JSX.Element} The Dashboard React component.
 */
const Dashboard = ({ userId }) => {
  const {
    useApi,
    toggleDataMode,
    currentUserData,
    userPerformanceData,
    userActivityData,
    userAverageSessionsData,
    loadingUserData,
    loadingPerformanceData,
    loadingActivityData,
    loadingAverageSessions,
  } = useFormatData();

  if (
    useApi &&
    (loadingUserData ||
      loadingPerformanceData ||
      loadingActivityData ||
      loadingAverageSessions)
  ) {
    return <div>Loading...</div>;
  }

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
          <div className="dashboard-header">
            <h1 className="dashboard-header-greeting">
              Bonjour{" "}
              <span className="dashboard-header-name">
                {currentUserData?.userInfos.firstName}
              </span>
            </h1>
            <div className="toggle-button-container">
              <span className="toggle-label">Mock</span>
              <ReactSwitch
                checked={useApi}
                onChange={toggleDataMode}
                onColor="#86d3ff"
                offColor="#ccc"
                checkedIcon={false}
                uncheckedIcon={false}
              />
              <span className="toggle-label">API</span>
            </div>
          </div>
          <p className="dashboard-header-message">
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </p>
          <div className="dashboard-informations">
            <div className="dashboard-charts">
              <div className="activity-container" style={{ height: "400px" }}>
                <ActivityBar data={userActivityData.sessions} />
              </div>
              <div className="dashboard-charts-avgSession-objective-performance">
                <div className="avgSessions-container">
                  <AvgSessionsChart data={userAverageSessionsData.sessions} />
                </div>
                <div className="performance-container">
                  <PerformanceChart data={userPerformanceData.data} />
                </div>
                <div className="objective-container">
                  <ObjectiveChart score={currentUserData.userScore} />
                </div>
              </div>
            </div>
            <div className="dashboard-charts-calories-proteines-glucides-lipides">
              <div className="dashboard-charts-calories dashboard-charts-all">
                <KeyMetrics
                  icon={caloriesIcon}
                  name="Calories"
                  value={`${currentUserData?.userKeyData.calorieCount}kCal`}
                />
              </div>
              <div className="dashboard-charts-proteines dashboard-charts-all">
                <KeyMetrics
                  icon={proteinesIcon}
                  name="Proteines"
                  value={`${currentUserData?.userKeyData.proteinCount}g`}
                />
              </div>
              <div className="dashboard-charts-glucides dashboard-charts-all">
                <KeyMetrics
                  icon={glucidesIcon}
                  name="Glucides"
                  value={`${currentUserData?.userKeyData.carbohydrateCount}g`}
                />
              </div>
              <div className="dashboard-charts-lipides dashboard-charts-all">
                <KeyMetrics
                  icon={lipidesIcon}
                  name="Lipides"
                  value={`${currentUserData?.userKeyData.lipidCount}g`}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

Dashboard.propTypes = {
  userId: PropTypes.string,
};

export default Dashboard;
