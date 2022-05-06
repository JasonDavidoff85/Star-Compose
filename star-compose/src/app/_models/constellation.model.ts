import { Star } from "./star.model";
import { Connection } from "./connection.model";

export interface Constellation {
    height: number;
    width: number;
    name: string;
    stars: Star[];
    connections: Connection[];
    month: number;
    nLat: number;
    sLat: number;
    left: number;
    top: number;
}