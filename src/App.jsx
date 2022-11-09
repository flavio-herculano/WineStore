import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import "./App.css";
import Login from "components/Login";
import Register from "components/Register";
import Dashboard from "components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Entrar" element={<Login />} />
        <Route exact path="/Cadastro" element={<Register />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
