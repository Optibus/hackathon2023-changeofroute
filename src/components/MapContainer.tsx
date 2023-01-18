import { FeatureCollection } from "geojson";
import { useMemo } from "react";
import Map, { Layer, Source } from "react-map-gl";
import { COLORS } from "../constants";
import { Route, Stop } from "../types";

const TOKEN =
  "pk.eyJ1IjoiZWxhZGFsZmFzc2EiLCJhIjoiY2xkMDRmaGY2MTM3aDNxcWx3dHYzZjl3eiJ9.AM2H8oWyhMuLgC6Rqnp84g";

type Props = {
  stops?: Stop[];
  cancelledStops?: Stop[];
  routes?: Route[];
  height?: string;
  width?: string;
  cancalledRoutes?: Route[];
};

const MapContainer = ({
  stops = [],
  cancelledStops,
  routes = [],
  cancalledRoutes = [],
  height = "calc(98 * 0.8vw)",
  width = "98vw",
}: Props) => {
  const stopsGeojson: FeatureCollection = useMemo(
    () => ({
      type: "FeatureCollection",
      features: stops.map((stop, i) => ({
        type: "Feature",
        geometry: stop.geometry,
        properties: {
          name: stop.name,
          color: COLORS[i],
        },
      })),
    }),
    [stops]
  );

  const cancelledStopsGeojson: FeatureCollection = useMemo(
    () => ({
      type: "FeatureCollection",
      features:
        cancelledStops?.map((stop, i) => ({
          type: "Feature",
          geometry: stop.geometry,
          properties: {
            name: stop.name,
            color: COLORS[i],
          },
        })) ?? [],
    }),
    [cancelledStops]
  );
  const routesGeojson: any = useMemo(
    () => ({
      type: "FeatureCollection",
      features: routes.map((route, i) => ({
        type: "Feature",
        geometry: {
          ...route.geometry,
          coordinates: [
            route.geometry.coordinates[0].map(([one, two]: any) => [two, one]),
          ],
        },
        properties: {
          name: route.name,
          color: COLORS[i],
        },
      })),
    }),
    [routes]
  );

  console.log(routesGeojson);

  const cancalledRoutesGeoJson: FeatureCollection = useMemo(
    () => ({
      type: "FeatureCollection",
      features: cancalledRoutes.map((route, i) => ({
        type: "Feature",
        geometry: route.geometry,
        properties: {
          name: route.name,
        },
      })),
    }),
    [cancalledRoutes]
  );
  console.log("cancalledRoutesGeoJson", cancalledRoutesGeoJson);

  return (
    <Map
      initialViewState={{
        longitude: 174.70757629945953,
        latitude: -36.885111237467974,
        zoom: 15,
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
      <Source
        id="cancalled-segment-2"
        type="geojson"
        data={cancalledRoutesGeoJson}
      >
        <Layer
          type="line"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": "#FF2525",
            "line-width": 12,
            "line-dasharray": [0.1, 1.8],
          }}
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
