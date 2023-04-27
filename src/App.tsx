import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//import NewProject from "./components/NewProject";
import LoginComponent from "./components/LoginComponent";
import Home from "./components/Home";
import HeaderComponent from "./components/HeaderComponent";
import LogTableComponent from "./components/LogTableComponent";

function App() {
  return (
    <div className="h-screen bg-black shadow-md font-semibold">
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="projects" element={<Home />}>
          <Route path=":projectId" element={<HeaderComponent />}>
            <Route path="logs" element={<LogTableComponent />} />
            {/* <Route path="newproject" element={<NewProject />} /> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
