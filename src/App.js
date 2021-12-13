import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import HomeScreen from "./pages/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/home" exact element={<HomeScreen />} />
    </Routes>
  );
};

export default App;
