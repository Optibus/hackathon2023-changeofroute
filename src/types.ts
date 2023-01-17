import { FeatureCollection, LineString, Point } from "geojson";

export type Stops = FeatureCollection;
export type Routes = LineString[];
export type Stop = {
    name: string;
    id: string;
    geometry: Point
}
