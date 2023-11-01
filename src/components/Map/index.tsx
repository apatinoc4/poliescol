"use client";

import React, { FC } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./map.scss";

const Map: FC = () => {
  const position: any = [6.153623808252237, -75.63018895206645];

  const icon = new L.Icon({
    iconUrl:
      "https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/map-pin-icon.png",
    shadowUrl: "my-icon-shadow.png",
  });

  return (
    <MapContainer
      center={position}
      zoom={16}
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker icon={icon} position={position}></Marker>
    </MapContainer>
  );
};

export default Map;
