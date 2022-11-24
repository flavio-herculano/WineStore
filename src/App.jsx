import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import "./App.css";
import Login from "components/Login";
import Register from "components/Register";
import Dashboard from "components/Dashboard";
import VinhoBranco from "components/Home/VinhoBranco";
import VinhoSeco from "components/Home/VinhoSeco";
import VinhoTinto from "components/Home/VinhoTinto";
import Product from "components/Home/Product";
import {Auhprovider} from "./components/Login/auth";
import  {useState} from "react";

function App() {
  const [user, setUser] = useState(null);
  
  const login = (cpf, pass) => {
    console.log("login auth", {cpf,pass});
    setUser({id: "123", cpf});
  };
  
  const logout = () => {
    console.log("logout");
  };

  return (
    <Router>
      <Auhprovider>
      <Routes> 
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Produto/:id" element={<Product />} />
        <Route exact path="/Vinho_Branco" element={<VinhoBranco />} />
        <Route exact path="/Vinho_Seco" element={<VinhoSeco />} />
        <Route exact path="/Vinho_Tinto" element={<VinhoTinto />} />
        <Route exact path="/Entrar" element={<Login />} />
        <Route exact path="/Cadastro" element={<Register />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
      </Routes>
      </Auhprovider>
    </Router>
  );
}

export default App;
