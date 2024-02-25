// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "../src/Pages/DataContext/DataContext";
import DashBoard from "../src/Pages/DashBoard/DashBoard";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/dashboard/:userId" element={<DashBoard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
