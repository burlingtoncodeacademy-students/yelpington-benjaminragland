import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";
import L from "leaflet";

function Map(props) {
  return (
    <MapContainer
      id="map-container"
      center={props.center}
      zoom={13}
      style={{ height: "600px", width: "600px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={props.center} />
      <Marker position={[44.46896859311432, -73.21423377529054]}>
        <Popup>Great Harvest</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
