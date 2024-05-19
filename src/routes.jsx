import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Views/home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
