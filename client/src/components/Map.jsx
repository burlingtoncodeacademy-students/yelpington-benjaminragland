import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";

function Map(props) {
  const greatHarvestLocation = [44.46896859311432, -73.21423377529054];
  const blissBeeLocation = [44.436718897544225, -73.21085727865812];
  const burlingtonBagelLocation = [44.44195377544982, -73.20945167394733];
  const paneraLocation = [44.437062685237294, -73.20947313158467];
  const tasteeLocation = [44.44034133128513, -73.21026706543543];
  const greatNorthernLocation = [44.4598586503207, -73.21354245200371];
  const ecoBeanLocation = [44.465599056053094, -73.17960676974194];
  const leonardosLocation = [44.469495769785595, -73.17546045947647];
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
      <Marker position={greatHarvestLocation}>
        <Popup className="popup">Great Harvest</Popup>
      </Marker>
      <Marker position={blissBeeLocation}>
        <Popup className="popup">Bliss Bee</Popup>
      </Marker>
      <Marker position={burlingtonBagelLocation}>
        <Popup className="popup">Burlington Bagel Bakery</Popup>
      </Marker>
      <Marker position={paneraLocation}>
        <Popup className="popup">Panera Bread</Popup>
      </Marker>
      <Marker position={tasteeLocation}>
        <Popup className="popup">TASTee GRILL</Popup>
      </Marker>
      <Marker position={ecoBeanLocation}>
        <Popup className="popup">Eco Bean & Greens</Popup>
      </Marker>
      <Marker position={greatNorthernLocation}>
        <Popup className="popup">The Great Northern</Popup>
      </Marker>
      <Marker position={leonardosLocation}>
        <Popup className="popup">Leonardo's Pizza</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
