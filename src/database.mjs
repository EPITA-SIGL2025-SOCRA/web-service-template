import data from "./data.json" assert { type: "json" };
import { distance } from "./distance.mjs";

/**
 * Returns the tractors around a reference point.
 *
 * @param {*} reference { lat: number, lng: number } object which represents the position of the reference point.
 * @param {*} radiusInKm number which represents the radius in kilometers.
 * @param {*} limit the number of tractors to return. Default to 25
 * @returns Tractors in the radius around the reference point, with limit of max tractor returned.
 */
export function getTractorsAround(reference, radiusInKm, limit = 25) {
  const { lat, lng } = reference;
  const tractors = data.filter((tractor) => {
    const d = distance({ lat, lng }, tractor.lat_long);
    return d <= radiusInKm;
  });
  return tractors.slice(0, limit);
}
