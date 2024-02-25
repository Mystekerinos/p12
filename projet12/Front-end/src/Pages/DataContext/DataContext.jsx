// DataContext.js
import React, { createContext, useContext, useState } from "react";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_PERFORMANCE,
} from "../../data/data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData] = useState(USER_MAIN_DATA);
  const [activityData] = useState(USER_ACTIVITY);
  const [performanceData] = useState(USER_PERFORMANCE);

  return (
    <DataContext.Provider value={{ userData, activityData, performanceData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

export default DataContext;
