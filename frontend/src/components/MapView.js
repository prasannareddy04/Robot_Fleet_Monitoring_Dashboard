import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = ({ robots }) => {
  return (
    <div className="map-view">
      <h2>Robot Locations</h2>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {robots.map((robot) => (
          <Marker
            key={robot["Robot ID"]}
            position={robot["Location Coordinates"]}
          >
            <Popup>
              <strong>ID:</strong> {robot["Robot ID"]} <br />
              <strong>Battery:</strong> {robot["Battery Percentage"]}% <br />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
