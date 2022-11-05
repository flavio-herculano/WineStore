import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
