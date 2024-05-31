import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@mdi/font/css/materialdesignicons.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import RolesAndRights from "./components/Rolesandright/RolesAndRights";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/roles_right" element={<RolesAndRights />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
