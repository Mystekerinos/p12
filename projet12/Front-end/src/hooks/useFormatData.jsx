import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserData from "../models/userData";
import UserActivityData from "../models/userActivityData";
import UserAverageSessionsData from "../models/userAverageSessionsData";
import UserPerformanceData from "../models/userPerformanceData";
import {
  USER_MAIN_DATA,
  USER_PERFORMANCE,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
} from "../data/data";
import { apiServiceFetchData } from "../utils/apiServiceFetchData";

/**
 * Custom hook for formatting user data.
 * @returns {{
 *   useApi: boolean,
 *   toggleDataMode: () => void,
 *   currentUserData: UserData | null,
 *   userPerformanceData: UserPerformanceData | null,
 *   userActivityData: UserActivityData | null,
 *   userAverageSessionsData: UserAverageSessionsData | null,
 *   loadingUserData: boolean,
 *   loadingPerformanceData: boolean,
 *   loadingActivityData: boolean,
 *   loadingAverageSessions: boolean
 * }} Formatted user data.
 */
const useFormatData = () => {
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

  const [loadingUserData, setLoadingUserData] = useState(true);
  const [loadingPerformanceData, setLoadingPerformanceData] = useState(true);
  const [loadingActivityData, setLoadingActivityData] = useState(true);
  const [loadingAverageSessions, setLoadingAverageSessions] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { userData, performanceData, activityData, averageSessions } =
          await apiServiceFetchData(userId);
        setUserData(new UserData(userData));
        setPerformanceData(new UserPerformanceData(performanceData));
        setActivityData(new UserActivityData(activityData));
        setAverageSessions(new UserAverageSessionsData(averageSessions));
        setLoadingUserData(false);
        setLoadingPerformanceData(false);
        setLoadingActivityData(false);
        setLoadingAverageSessions(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {}, [
    userData,
    performanceData,
    activityData,
    averageSessions,
  ]);

  const currentUserData = useApi
    ? userData
    : new UserData(userDataMock.find((user) => user.id === parseInt(userId)));
  const userPerformanceData = useApi
    ? performanceData
    : new UserPerformanceData(
        performanceDataMock.find((user) => user.userId === parseInt(userId))
      );
  const userActivityData = useApi
    ? activityData
    : new UserActivityData(
        activityDataMock.find((user) => user.userId === parseInt(userId))
      );
  const userAverageSessionsData = useApi
    ? averageSessions
    : new UserAverageSessionsData(
        averageSessionsMock.find((user) => user.userId === parseInt(userId))
      );
  /**
   * Function to toggle between API and mock data mode.
   */
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
    loadingUserData,
    loadingPerformanceData,
    loadingActivityData,
    loadingAverageSessions,
  };
};

export default useFormatData;
