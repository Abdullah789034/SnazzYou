import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Context/UserContext.jsx";

import "./App.css";
import Home from "./Views/home";
import Analyzing from "./components/LandingPage/Analyzing";
import AIScreen from "./components/AI/AIScreen";
import AISuggest from "./components/AI/AISuggest";
import Navbar from "./components/LandingPage/Navbar";
import Login from "./components/Login/Login.jsx";
import GetName from "./components/Login/GetName.jsx";
import GetEmail from "./components/Login/GetEmail.jsx";
import GetDateRegion from "./components/Login/GetDateRegion.jsx";
import GetGender from "./components/Login/GetGender.jsx";
import GetPassword from "./components/Login/GetPassword.jsx";
import Upload from "./components/LandingPage/Upload.jsx";
import Images from "./components/Images.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";
import Loginn from "./components/Login/Loginn.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Analysis from "./components/AI/Analysis.jsx";
import Suggestions from "./components/AI/Suggestions.jsx";

const AppRoutes = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/upload" element={<Upload />} />
            <Route path="/images" element={<Images />} />
            <Route path="/analyze" element={<Analyzing />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/ai" element={<AIScreen />} />
            <Route path="/ai-suggest" element={<AISuggest />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/suggestions" element={<Suggestions />} />
          </Route>

          <Route path="/login" element={<Loginn />} />

          <Route path="/register" element={<GetName />} />
          <Route path="/register/email" element={<GetEmail />} />
          <Route path="/register/date-region" element={<GetDateRegion />} />
          <Route path="/register/gender" element={<GetGender />} />
          <Route path="/register/password" element={<GetPassword />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default AppRoutes;
