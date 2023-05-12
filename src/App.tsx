import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//import NewProject from "./components/NewProject";
import LoginComponent from "./components/LoginComponent";
import Home from "./components/Home";
import HeaderComponent from "./components/HeaderComponent";
import LogTableComponent from "./components/LogTableComponent";
import SettingsComponent from "./components/SettingsComponent";
import DailyLogComponent from "./components/DailyLogComponent";

function App() {
  return (
    <div className="shadow-md font-semibold min-h-screen h-auto">
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="projects" element={<Home />}>
          <Route path=":projectId" element={<HeaderComponent />}>
            <Route path="logs" element={<LogTableComponent />} />
            <Route path="logs/dailylog" element={<DailyLogComponent />} />
            <Route path="settings" element={<SettingsComponent />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
