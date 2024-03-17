// utils/useApiData.js

import { useState, useEffect } from "react";
import { fetchData } from "./FetchData";

const useApiData = (userId) => {
  const [userData, setUserData] = useState(undefined);
  const [performanceData, setPerformanceData] = useState(undefined);
  const [activityData, setActivityData] = useState(undefined);
  const [averageSessions, setAverageSessions] = useState(undefined);
  // Définissez d'autres états pour les données si nécessaire

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

    // Ajoutez d'autres appels à fetchData pour récupérer d'autres données si nécessaire
  }, [userId]);

  return { userData, performanceData, activityData, averageSessions };
};

export default useApiData;
