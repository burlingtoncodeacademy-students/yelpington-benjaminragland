// imports for map and styling
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../../App.css";

function TasteeMap(props) {
  //longitude and latitude assignments to variables for each restaurant
  const greatHarvestLocation = [44.46896859311432, -73.21423377529054];
  const blissBeeLocation = [44.436718897544225, -73.21085727865812];
  const burlingtonBagelLocation = [44.44195377544982, -73.20945167394733];
  const paneraLocation = [44.437062685237294, -73.20947313158467];
  const tasteeLocation = [44.44034133128513, -73.21026706543543];
  const greatNorthernLocation = [44.4598586503207, -73.21354245200371];
  const ecoBeanLocation = [44.465599056053094, -73.17960676974194];
  const leonardosLocation = [44.469495769785595, -73.17546045947647];
  return (
    //map and tile layer for individual map
    <MapContainer
      id="map-container"
      center={tasteeLocation}
      zoom={17}
      style={{ height: "55vh", width: "40vw" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* restaurant marker popups and links for all restaurants */}
      <Marker position={[44.47, -73.2]}>
        <Popup>Downtown Burlington VT</Popup>
      </Marker>
      <Marker position={greatHarvestLocation}>
        <Popup className="popup">
          <a href="/restaurant/great-harvest">Great Harvest</a>
        </Popup>
      </Marker>
      <Marker position={blissBeeLocation}>
        <Popup className="popup">
          <a href="/restaurant/bliss-bee">Bliss Bee</a>
        </Popup>
      </Marker>
      <Marker position={burlingtonBagelLocation}>
        <a>
          <Popup className="popup">
            <a href="/restaurant/burlington-bagel-bakery">
              Burlington Bagel Bakery
            </a>
          </Popup>
        </a>
      </Marker>
      <Marker position={paneraLocation}>
        <Popup className="popup">
          <a href="/restaurant/panera-bread">Panera Bread</a>
        </Popup>
      </Marker>
      <Marker position={tasteeLocation}>
        <Popup className="popup">
          <a href="/restaurant/tastee-grill">TASTee GRILL</a>
        </Popup>
      </Marker>
      <Marker position={ecoBeanLocation}>
        <Popup className="popup">
          <a href="/restaurant/eco-bean">Eco Bean & Greens</a>
        </Popup>
      </Marker>
      <Marker position={greatNorthernLocation}>
        <Popup className="popup">
          <a href="/restaurant/great-northern">The Great Northern</a>
        </Popup>
      </Marker>
      <Marker position={leonardosLocation}>
        <Popup className="popup">
          <a href="/restaurant/leonardos">Leonardo's Pizza</a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default TasteeMap;
