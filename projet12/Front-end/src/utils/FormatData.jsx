import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  USER_MAIN_DATA,
  USER_PERFORMANCE,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
} from "../data/data";
import { FetchData } from "../utils/FetchData";

const FormatData = () => {
  const { userId } = useParams();
  const [useApi, setUseApi] = useState(true);
  const [userDataMock] = useState(USER_MAIN_DATA);
  const [performanceDataMock] = useState(USER_PERFORMANCE);
  const [activityDataMock] = useState(USER_ACTIVITY);
  const [averageSessionsMock] = useState(USER_AVERAGE_SESSIONS);
  const [userData, setUserData] = useState(null);
  const [performanceData, setPerformanceData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { userData, performanceData, activityData, averageSessions } =
          await FetchData(userId);
        setUserData(userData);
        setPerformanceData(performanceData);
        setActivityData(activityData);
        setAverageSessions(averageSessions);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    console.log(
      "props1",
      userData,
      performanceData,
      activityData,
      averageSessions
    );
  }, [userData, performanceData, activityData, averageSessions]);

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

  const toggleDataMode = () => {
    setUseApi((prevMode) => !prevMode);
  };

  return {
    useApi,
    toggleDataMode,
    currentUserData,
    userPerformanceData,
    userActivityData,
    userAverageSessionsData,
  };
};

export default FormatData;
