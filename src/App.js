import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Banner />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
