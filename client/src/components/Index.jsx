import "../App.css";
import { useState } from "react";
import Header from "./Header";
import Map from "./Map";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Index(props) {
  const [center, setCenter] = useState([44.47, -73.2]);

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
