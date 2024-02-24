import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "../src/Pages/DashBoard/DashBoard";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:userId" element={<DashBoard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
