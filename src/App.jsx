import React from "react";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import '@mdi/font/css/materialdesignicons.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
