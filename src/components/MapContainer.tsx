import { useMemo } from "react";
import Map, { Layer, Source } from "react-map-gl";
import { Route, Stop } from "../types";
import { FeatureCollection } from "geojson";
import React from "react";

const TOKEN =
  "pk.eyJ1IjoiZWxhZGFsZmFzc2EiLCJhIjoiY2xkMDRmaGY2MTM3aDNxcWx3dHYzZjl3eiJ9.AM2H8oWyhMuLgC6Rqnp84g";

type Props = {
  stops?: Stop[];
  cancelledStops?: Stop[];
  routes?: Route[];
  height?: string;
  width?: string;
};

const MapContainer = ({
  stops = [],
  cancelledStops,
  routes = [],
  height = "calc(98 * 0.8vw)",
  width = "98vw",
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

  const cancelledStopsGeojson: FeatureCollection = useMemo(
    () => ({
      type: "FeatureCollection",
      features:
        cancelledStops?.map((stop) => ({
          type: "Feature",
          geometry: stop.geometry,
          properties: {
            name: stop.name,
            color: stop.color,
          },
        })) ?? [],
    }),
    [cancelledStops]
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
      mapStyle="mapbox://styles/eladalfassa/cld0gjrc0005614qtts9tdzhk"
      mapboxAccessToken={TOKEN}
    >
      <Source id="routes" type="geojson" data={routesGeojson}>
        <Layer
          type="line"
          paint={{ "line-color": ["get", "color"], "line-width": 12 }}
        />
      </Source>
      <Source id="cancelledStops" type="geojson" data={cancelledStopsGeojson}>
        <Layer
          type="symbol"
          layout={{
            "icon-allow-overlap": true,
            "icon-ignore-placement": true,
            "text-allow-overlap": true,
            "text-ignore-placement": true,
            "icon-size": 1,
            "icon-image": "CancelledStop",
          }}
        />
      </Source>
      <Source id="stops" type="geojson" data={stopsGeojson}>
        <Layer
          type="circle"
          paint={{
            "circle-radius": 10,
            "circle-color": ["get", "color"],
            "circle-stroke-color": "white",
            "circle-stroke-width": 3,
          }}
        />
      </Source>
    </Map>
  );
};

export default MapContainer;
