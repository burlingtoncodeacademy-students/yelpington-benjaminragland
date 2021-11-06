import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./components/Map.jsx";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar";
import Restaurant from "./components/Restaurant";
import Index from "./components/Index";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/restaurant" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
