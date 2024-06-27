import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Views/home";
import Analyzing from "./components/LandingPage/Analyzing";
import AIScreen from "./components/AI/AIScreen";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyzing />} />
        <Route path="/ai" element={<AIScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
