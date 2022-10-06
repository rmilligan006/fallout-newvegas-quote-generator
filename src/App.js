import react, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import Splash from "./components/Splash";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
