import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewProject from "./components/NewProject";
import TestComponent from "./components/TestComponent";
import LoginComponent from "./components/LoginComponent";
import Home from "./components/Home";

function App() {
  return (
    <div className="h-screen bg-black shadow-md font-semibold">
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="projects" element={<Home />}>
          <Route path="newproject" element={<NewProject />} />
          <Route path="testcomponent" element={<TestComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
