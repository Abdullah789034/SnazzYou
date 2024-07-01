import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './Context/UserContext.jsx';

import "./App.css";
import Home from "./Views/home";
import Analyzing from "./components/LandingPage/Analyzing";
import AIScreen from "./components/AI/AIScreen";
import AISuggest from "./components/AI/AISuggest";
import Navbar from "./components/LandingPage/Navbar";
import Login from "./components/Login/Login";
import GetName from "./components/Login/GetName.jsx";
import GetEmail from "./components/Login/GetEmail.jsx";
import GetDateRegion from "./components/Login/GetDateRegion.jsx";
import GetGender from "./components/Login/GetGender.jsx";
import GetPassword from "./components/Login/GetPassword.jsx";

const AppRoutes = () => {
  return (
    <UserProvider >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<Analyzing />} />
          <Route path="/ai" element={<AIScreen />} />
          <Route path="/ai-suggest" element={<AISuggest />} />

          <Route path="/login" element={<GetName />} />
          <Route path="/email" element={<GetEmail />} />
          <Route path="/date-region" element={<GetDateRegion />} />
          <Route path="/gender" element={<GetGender />} />
          <Route path="/password" element={<GetPassword />} />

        </Routes>
      </Router>
    </UserProvider>
  );
};

export default AppRoutes;
