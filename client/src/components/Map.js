import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";

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
      <Marker position={props.center}>
        <Popup>Downtown Burlington VT</Popup>
      </Marker>
      <Marker position={[44.46896859311432, -73.21423377529054]}>
        <Popup className="popup">Great Harvest</Popup>
      </Marker>
      <Marker position={[44.436718897544225, -73.21085727865812]}>
        <Popup className="popup">Bliss Bee</Popup>
      </Marker>
      <Marker position={[44.44195377544982, -73.20945167394733]}>
        <Popup className="popup">Burlington Bagel Bakery</Popup>
      </Marker>
      <Marker position={[44.437062685237294, -73.20947313158467]}>
        <Popup className="popup">Panera Bread</Popup>
      </Marker>
      <Marker position={[44.44034133128513, -73.21026706543543]}>
        <Popup className="popup">TASTee GRILL</Popup>
      </Marker>
      <Marker position={[44.465599056053094, -73.17960676974194]}>
        <Popup className="popup">Eco Bean & Greens</Popup>
      </Marker>
      <Marker position={[44.4598586503207, -73.21354245200371]}>
        <Popup className="popup">The Great Northern</Popup>
      </Marker>
      <Marker position={[44.469495769785595, -73.17546045947647]}>
        <Popup className="popup">Leonardo's Pizza</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
