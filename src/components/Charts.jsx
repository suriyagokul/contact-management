import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/charts.scss";
import covidIcon from "../styles/covid.png";

export default function Charts() {
  const [apidata, setApiData] = useState([]);

  const covidMarkerIcon = L.icon({
    iconUrl: covidIcon,
    iconSize: [25, 25],
    iconAnchor: [12, 12],
  });

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((response) => setApiData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <MapContainer
      style={{
        height: "100vh",
        width: "100%",
        marginTop: "10px",
      }}
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {apidata.map((country) => {
        const { countryInfo, cases, deaths, recovered, active } = country;
        const position = [countryInfo.lat, countryInfo.long];

        return (
          <Marker
            key={countryInfo._id}
            position={position}
            bounceOnAdd={false}
            icon={covidMarkerIcon}
          >
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <ul>
                  <li>
                    <strong>Cases:</strong> {cases}
                  </li>
                  <li>
                    <strong>Deaths:</strong> {deaths}
                  </li>
                  <li>
                    <strong>Recovered:</strong> {recovered}
                  </li>
                  <li>
                    <strong>Active:</strong> {active}
                  </li>
                </ul>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
