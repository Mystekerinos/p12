import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; 
import DashBoard from "../src/Pages/DashBoard/DashBoard";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/user/12" replace />} />
        <Route path="/user/:userId" element={<DashBoard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
