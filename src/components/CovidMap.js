import React from "react";

import { MapContainer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

function CovidMap({ countries }) {
  const mapStyle = {
    height: "90vh",
  };

  const geoJSONStyle = {
    height: "90vh",
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    layer.bindPopup(`${name} - ${confirmedText}`);
  };

  return (
    <MapContainer style={mapStyle} zoom={2} center={[10, 0]}>
      <GeoJSON
        style={geoJSONStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
      <Marker position={[10, 0]}>
        <Popup position={[10, 0]}>Center of the map </Popup>
      </Marker>
    </MapContainer>
  );
}

export default CovidMap;
