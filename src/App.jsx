import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@mdi/font/css/materialdesignicons.min.css";
import './css/rtl/core.css'
import './css/rtl/theme-default.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import RolesAndRights from "./components/Rolesandright/RolesAndRights";
import Companyprofile from "./components/EmployeeManagement/Companyprofile";
import Bankothers from "./components/EmployeeManagement/Bankothers";
import Salary from "./components/EmployeeManagement/Salary";
import Kyc from "./components/EmployeeManagement/Kyc";
import Document from "./components/EmployeeManagement/Document";
import DepartmentName from "./components/Department/department_name";
import Designation from "./components/Department/designation";
import Level from "./components/Department/label";
import Grade from "./components/Department/grade";
import Organisation_str from "./components/Department/organisation_str";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/roles_right" element={<RolesAndRights />} />
        <Route path="/companyprofile" element={<Companyprofile />} />
        <Route path="/bankothers" element={<Bankothers />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/document" element={<Document />} />
        <Route path="/department_name" element={<DepartmentName/>} />
        <Route path="/designation" element={<Designation/>} />
        <Route path="/label" element={<Level/>} />
        <Route path="/grade" element={<Grade/>} />
        <Route path="/organisation_str" element={<Organisation_str/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
