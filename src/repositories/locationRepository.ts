import { prisma } from "../config/database";
import * as locationTypes from "../types/locationTypes";

export async function insertLocation(location: locationTypes.ILocationData) {
  return await prisma.location.create({
    select: {
      adventureId: true,
      locationName: true,
      locationPicture: true,
      locationDescription: true,
    },
    data: location,
  });
}
