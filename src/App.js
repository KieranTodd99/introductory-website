import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/index";
import About from "./components/pages/About";
import Hobbies from "./components/pages/Hobbies";
import Gus from "./components/pages/Gus";
import Achivements from "./components/pages/Achivements";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/gus" element={<Gus />} />
            <Route path="/achivements" element={<Achivements />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
