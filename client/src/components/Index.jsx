import "../App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Map from "./Map";
import Sidebar from "./Sidebar";

function Index(props) {
  const [center, setCenter] = useState([44.47, -73.2]);
  return (
    <container id="main-container">
      <Header />
      <div id="map-container">
        <Sidebar />
        <Map center={center} setCenter={setCenter} />
      </div>
    </container>
  );
}

export default Index;
