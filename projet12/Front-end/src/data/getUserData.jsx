import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data";
import UserData from "../models/userData";
import UserActivityData from "../models/userActivityData";
import UserAverageSessionsData from "../models/userAverageSessionsData";
import UserPerformanceData from "../models/userPerformanceData";

/**
 * @typedef {import("../models/userData").UserData} UserData
 * @typedef {import("../models/userActivityData").UserActivityData} UserActivityData
 * @typedef {import("../models/userAverageSessionsData").UserAverageSessionsData} UserAverageSessionsData
 * @typedef {import("../models/userPerformanceData").UserPerformanceData} UserPerformanceData
 */

/**
 * @param {string} userId - L'identifiant de l'utilisateur.
 * @param {"infos" | "activity" | "averageSessions" | "performance"} dataType - Le type de données à récupérer.
 * @returns {UserData | UserActivityData | UserAverageSessionsData | UserPerformanceData} Les données de l'utilisateur.
 */
export const getUserData = (userId, dataType) => {
  let data;

  switch (dataType) {
    case "infos":
      data = USER_MAIN_DATA.find((user) => user.id === userId);
      return new UserData(
        data.id,
        data.userInfos,
        data.keyData,
        data.todayScore
      );
    case "activity":
      data = USER_ACTIVITY.find((user) => user.userId === userId);
      return new UserActivityData(data.userId, data.sessions);
    case "averageSessions":
      data = USER_AVERAGE_SESSIONS.find((user) => user.userId === userId);
      return new UserAverageSessionsData(data.userId, data.sessions);
    case "performance":
      data = USER_PERFORMANCE.find((user) => user.userId === userId);
      return new UserPerformanceData(data.userId, data.data);
    default:
      throw new Error("Invalid data type");
  }
};
