import "./App.css";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import Header from "./components/Header";

function App() {
  const [center, setCenter] = useState([44.47768806802766, -73.19610866743429]);

  return (
    <>
      <Header />
      <div id="main-container">
        <Map center={center} setCenter={setCenter} />
      </div>
    </>
  );
}

export default App;
