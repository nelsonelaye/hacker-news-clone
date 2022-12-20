// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./routes/LandingPage";

import LatestStories from "./routes/LatestStories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/latest-stories" element={<LatestStories />} />
      </Routes>
    </Router>
  );
}

export default App;
