import { useState, useEffect } from "react";
import { fetchData } from "./FetchData";

const useApiData = (userId) => {
  const [userData, setUserData] = useState({
    id: -1,
    userInfos: {
      firstName: "",
      lastName: "",
      age: -1,
    },
    todayScore: 0.0,
    keyData: {
      calorieCount: 0,
      proteinCount: -1,
      carbohydrateCount: -1,
      lipidCount: -1,
    },
  });
  const [performanceData, setPerformanceData] = useState({
    userId: 0,
    kind: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
    },
    data: [
      { value: 0, kind: -1 },
      { value: 0, kind: -1 },
      { value: 0, kind: -1 },
      { value: 0, kind: -1 },
      { value: 0, kind: -1 },
      { value: 0, kind: -1 },
    ],
  });
  const [activityData, setActivityData] = useState({
    userId: -1,
    sessions: [
      { day: "", kilogram: 0, calories: -1 },
      { day: "", kilogram: 0, calories: -1 },
      { day: "", kilogram: 0, calories: -1 },
      { day: "", kilogram: 0, calories: -1 },
      { day: "", kilogram: 0, calories: -1 },
      { day: "", kilogram: 0, calories: -1 },
      { day: "", kilogram: 0, calories: -1 },
    ],
  });
  const [averageSessions, setAverageSessions] = useState({
    userId: 0,
    sessions: [
      { day: 0, sessionLength: -1 },
      { day: 0, sessionLength: -1 },
      { day: 0, sessionLength: -1 },
      { day: 0, sessionLength: -1 },
      { day: 0, sessionLength: -1 },
      { day: 0, sessionLength: -1 },
      { day: 0, sessionLength: -1 },
    ],
  });

  useEffect(() => {
    fetchData(`/user/${userId}`)
      .then((data) => setUserData(data.data))
      .catch((error) => console.error(error));

    fetchData(`/user/${userId}/performance`)
      .then((data) => setPerformanceData(data.data))
      .catch((error) => console.error(error));

    fetchData(`/user/${userId}/activity`)
      .then((data) => setActivityData(data.data))
      .catch((error) => console.error(error));

    fetchData(`/user/${userId}/average-sessions`)
      .then((data) => setAverageSessions(data.data))
      .catch((error) => console.error(error));
  }, [userId]);

  return { userData, performanceData, activityData, averageSessions };
};

export default useApiData;
