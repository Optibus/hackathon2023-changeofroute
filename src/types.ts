import { LineString, MultiLineString, Point } from "geojson";

export type Stops = Stop[];
export type Stop = {
  name?: string;
  id: string;
  geometry: Point;
  isCancelled?: boolean;
  color?: string;
};

export type StopDescription = {
  name: string;
  id: string;
};

export type Route = {
  name: string;
  geometry: MultiLineString | LineString;
};

export type Segment = {
  geometry: LineString;
  color?: string;
};

export type WalkingDistance = {
  minutes: number;
  meters: number;
};

export type StopAlternative = {
  stop?: Stop;
  walkingDistance?: WalkingDistance;
  color?: string;
};

export type PosterData = {
  cancelledStops: Array<Stop>;
  alternatives: Array<StopAlternative>;
  stop: Stop;
  stops: Array<Stop>;
  routes: Array<Route>;
  cancelledSegments: Array<Route>;
  dates: {
    start?: Date;
    end?: Date;
  };
  logo: string; // URL to the image
};
