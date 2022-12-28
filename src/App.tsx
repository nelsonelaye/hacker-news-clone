// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import BestStories from "./routes/BestStories";
import LandingPage from "./routes/TopStories";

import LatestStories from "./routes/LatestStories";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/latest-stories" element={<LatestStories />} />
        <Route path="/best-stories" element={<BestStories />} />
      </Routes>
    </Router>
  );
}

export default App;
