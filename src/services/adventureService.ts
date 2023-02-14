import * as generalRepository from "../repositories/generalRepository";
import * as adventureRepository from "../repositories/adventureRepository";
import * as adventureTypes from "../types/adventureTypes";
import {
  notFoundError,
  unauthorizedError,
} from "../middlewares/errorMiddleware";

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

export async function getAdventure(userId: number, adventureId: number) {
  const user = await generalRepository.findUserById(userId);

  if (!user) throw notFoundError("user");

  const adventure = await adventureRepository.findAdventureById(adventureId);

  if (!adventure) throw notFoundError("adventure");
  if (adventure.userId !== user.id) throw unauthorizedError("User");

  return adventure;
}

export async function updateAdventure(
  adventureData: adventureTypes.IAdventureUpdateData,
  userId: number,
  adventureId: number
) {
  const user = await generalRepository.findUserById(userId);

  if (!user) throw notFoundError("user");

  const adventure = await adventureRepository.findAdventureById(adventureId);

  if (!adventure) throw notFoundError("adventure");
  if (adventure.userId !== user.id) throw unauthorizedError("User");

  const updatedAdventure = await adventureRepository.updateAdventure(
    adventureId,
    adventureData
  );

  return updatedAdventure;
}

export async function deleteAdventure(userId: number, adventureId: number) {
  const user = await generalRepository.findUserById(userId);

  if (!user) throw notFoundError("user");

  const adventure = await adventureRepository.findAdventureById(adventureId);

  if (!adventure) throw notFoundError("adventure");
  if (adventure.userId !== user.id) throw unauthorizedError("User");

  return await adventureRepository.deleteAdventureById(adventureId);
}
