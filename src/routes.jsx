import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Views/home";
import Analyzing from "./components/LandingPage/Analyzing";
import AIScreen from "./components/AI/AIScreen";
import AISuggest from "./components/AI/AISuggest";
import Navbar from "./components/LandingPage/Navbar";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analyze" element={<Analyzing />} />
        <Route path="/ai" element={<AIScreen />} />
        <Route path="/ai-suggest" element={<AISuggest />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
