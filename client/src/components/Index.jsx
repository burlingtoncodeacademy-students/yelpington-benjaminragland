// Stylesheet and State imports
import "../App.css";
import { useState } from "react";

// React Component imports
import Header from "./Header";
import Map from "./Map";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

// Index Component function for main landing page.
function Index(props) {
  // Center state for centering Leaflet Map on central Burlington
  const [center, setCenter] = useState([44.47, -73.2]);

  // Returns all Components to make up landing page
  return (
    <container id="main-container">
      <Header />
      <div id="map-container">
        <Sidebar
          restaurantid={props.restaurantid}
          setRestaurantid={props.setRestaurantid}
        />
        <Map
          center={center}
          setCenter={setCenter}
          restLat={props.restLat}
          restLon={props.restLon}
        />
      </div>
      <Footer />
    </container>
  );
}

export default Index;
