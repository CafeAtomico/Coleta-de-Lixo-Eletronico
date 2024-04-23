import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapChart.css";

interface MapProps {
  markers: { coordinates: [number, number]; popupText: string }[];
}

function MapChart({ markers }: MapProps) {
  useEffect(() => {
    const map = L.map("map").setView([-25.428001, -49.275791], 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    markers.forEach((marker) => {
      L.marker(marker.coordinates).addTo(map).bindPopup(marker.popupText);
    });

    return () => {
      map.remove();
    };
  }, [markers]);

  return <div id="map" />;
}

export default MapChart;
