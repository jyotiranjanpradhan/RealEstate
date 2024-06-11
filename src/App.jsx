import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@mdi/font/css/materialdesignicons.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import RolesAndRights from "./components/Rolesandright/RolesAndRights";
import Companyprofile from "./components/EmployeeManagement/Companyprofile";
import Bankothers from "./components/EmployeeManagement/Bankothers";
import Salary from "./components/EmployeeManagement/Salary";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/roles_right" element={<RolesAndRights />} />
        <Route path="/companyprofile" element={<Companyprofile />} />
        <Route path="/salary" element={<Salary />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
