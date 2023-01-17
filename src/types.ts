import { LineString, MultiLineString, Point } from "geojson";

export type Stops = Stop[];
export type Stop = {
  name: string;
  id: string;
  geometry: Point;
  isCancelled?: boolean;
  color?: string;
};
export type Route = {
  name: string;
  color: string;
  geometry: MultiLineString | LineString;
};

export type Segment = {
  geometry: LineString;
  color?: string;
};
