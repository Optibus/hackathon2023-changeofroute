import { useMemo } from "react";
import Map, { Layer, Source } from "react-map-gl";
import { Route, Stop } from "../types";
import { FeatureCollection } from "geojson";

const TOKEN =
  "pk.eyJ1IjoiZWxhZGFsZmFzc2EiLCJhIjoiY2xkMDRmaGY2MTM3aDNxcWx3dHYzZjl3eiJ9.AM2H8oWyhMuLgC6Rqnp84g";

type Props = {
  stops?: Stop[];
  cancelledStops?: Stop[];
  routes?: Route[];
  height?: number;
  width?: number;
};

const MapContainer = ({
  stops = [],
  cancelledStops,
  routes = [],
  height = 400,
  width = 600,
}: Props) => {
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
      style={{ width, height }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      mapboxAccessToken={TOKEN}
    >
      <Source id="routes" type="geojson" data={routesGeojson}>
        <Layer
          type="line"
          paint={{ "line-color": ["get", "color"], "line-width": 5 }}
        />
      </Source>
      <Source id="stops" type="geojson" data={stopsGeojson}>
        <Layer
          type="circle"
          paint={{ "circle-radius": 10, "circle-color": ["get", "color"] }}
        />
      </Source>
    </Map>
  );
};

export default MapContainer;
