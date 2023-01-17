import { FeatureCollection, LineString, Point } from "geojson";

export type Stops = FeatureCollection;
export type Stop = {
    name: string;
    id: string;
    geometry: Point
}
export type Route = {
    name: string;
    color: string;
    geometry: LineString;
}

export type Segment = {
    geometry: LineString;
    color?: string;
}
