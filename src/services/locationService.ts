import * as generalRepository from "../repositories/generalRepository";
import * as locationRepository from "../repositories/locationRepository";
import * as locationController from "../controllers/locationController";
import * as locationTypes from "../types/locationTypes";
import {
  notFoundError,
  unauthorizedError,
} from "../middlewares/errorMiddleware";

export async function createLocation(
  userId: number,
  locationData: locationTypes.ILocationData
) {}
