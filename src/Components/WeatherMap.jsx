/* eslint-disable react/prop-types */

import React, { useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import L from 'leaflet'


const WeatherMap = ({lati , long, temperature }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && lati && long) {
      const bounds = L.latLngBounds([[lati, long], [lati + 1, long + 1]]);
      mapRef.current.fitBounds(bounds, { padding: [50, 50] }); 
    }
  }, [lati, long]);
  return (
    <>
        <MapContainer
      center={[lati, long]}
      zoom={5}
      ref={mapRef}
      style={{ height: "400px", width: "100%", borderRadius: "10px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Amit Mali</a> Learning'
      />
      <Marker position={[lati, long]}>
      <Popup >
      {temperature} &deg;C
      </Popup>
      </Marker>
    </MapContainer>
    </>
  )
}

export default WeatherMap
