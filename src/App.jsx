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
import Kyc from "./components/EmployeeManagement/Kyc";
import Document from "./components/EmployeeManagement/Document";
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
