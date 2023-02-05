import * as generalRepository from "../repositories/generalRepository";
import * as adventureRepository from "../repositories/adventureRepository";
import * as adventureTypes from "../types/adventureTypes";
import * as generalUtils from "../utils/generalUtils";
import { notFoundError } from "../middlewares/errorMiddleware";

export async function createAdventure(
  adventure: adventureTypes.IAdventureDataPARTIAL,
  id: number
) {
  const user = await generalRepository.findUserById(id);

  if (!user) throw notFoundError("user");

  return await adventureRepository.insertAdventure({
    ...adventure,
    userId: id,
  });
}

export async function getAdventures(userId: number) {
  const adventures = await adventureRepository.findUserByIdWithAdventures(
    userId
  );

  if (!adventures) throw notFoundError("user");

  return adventures;
}
