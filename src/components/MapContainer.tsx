import { useMemo } from "react";
import Map, { Layer, Source } from "react-map-gl";
import { Route, Stop } from "../types";
import { FeatureCollection } from "geojson";

const TOKEN =
  "pk.eyJ1IjoiZWxhZGFsZmFzc2EiLCJhIjoiY2xkMDRmaGY2MTM3aDNxcWx3dHYzZjl3eiJ9.AM2H8oWyhMuLgC6Rqnp84g";

type Props = {
  stops: Stop[];
  cancelledStops?: Stop[];
  routes: Route[];
};

const MapContainer = ({ stops, cancelledStops, routes }: Props) => {
  const stopsGeojson: FeatureCollection = useMemo(
    () => ({
      type: "FeatureCollection",
      features: stops.map((stop) => ({
        type: "Feature",
        geometry: stop.geometry,
        properties: {
          name: stop.name,
          color: stop.color,
        },
      })),
    }),
    [stops]
  );

  const routesGeojson: FeatureCollection = useMemo(
    () => ({
      type: "FeatureCollection",
      features: routes.map((route) => ({
        type: "Feature",
        geometry: route.geometry,
        properties: {
          name: route.name,
          color: route.color,
        },
      })),
    }),
    [routes]
  );

  return (
    <Map
      initialViewState={{
        longitude: 34.776272,
        latitude: 32.0756,
        zoom: 14,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={TOKEN}
    >
      <Source id="stops" type="geojson" data={stopsGeojson}>
        <Layer
          type="circle"
          paint={{ "circle-radius": 10, "circle-color": "#007cbf" }}
        />
      </Source>
      <Source id="routes" type="geojson" data={routesGeojson}>
        <Layer type="line" paint={{ "line-color": ["get", "color"] }} />
      </Source>
    </Map>
  );
};

export default MapContainer;
