import React, { createContext, useContext, useEffect, useState } from "react";
import { getUserData } from "../data/getDatas";

/**
 * @typedef {Object} DataContextValue
 * @property {string | null} userId - L'identifiant de l'utilisateur.
 * @property {React.Dispatch<React.SetStateAction<string | null>>} setUserId - Fonction pour mettre à jour l'identifiant de l'utilisateur.
 * @property {*} userData - Les données de l'utilisateur.
 * @property {*} userPerformanceData - Les données de performance de l'utilisateur.
 * @property {*} userActivityData - Les données d'activité de l'utilisateur.
 * @property {*} userAverageSessionsData - Les données de sessions moyennes de l'utilisateur.
 */

/**
 * Contexte pour fournir des données d'utilisateur à l'application.
 * @type {React.Context<DataContextValue | null>}
 */
export const DataContext = createContext(null);

/**
 * Composant fournisseur de contexte pour les données utilisateur.
 * @param {Object} props - Les props du composant.
 * @param {ReactNode} props.children - Les éléments enfants du composant.
 * @returns {JSX.Element} Le composant DataContextProvider.
 */
export const DataContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const [userPerformanceData, setUserPerformanceData] = useState(null);
  const [userActivityData, setUserActivityData] = useState(null);
  const [userAverageSessionsData, setUserAverageSessionsData] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        setUserData(await getUserData(userId, "infos"));
        setUserActivityData(await getUserData(userId, "activity"));
        setUserAverageSessionsData(
          await getUserData(userId, "averageSessions")
        );
        setUserPerformanceData(await getUserData(userId, "performance"));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userId]);

  /**
   * Contexte de données.
   * @type {DataContextValue}
   */
  const contextValue = {
    userId,
    setUserId,
    userData,
    userPerformanceData,
    userActivityData,
    userAverageSessionsData,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

/**
 * Hook pour utiliser le contexte de données.
 * @returns {DataContextValue} Les valeurs du contexte de données.
 */
export const useDataContext = () => useContext(DataContext);
