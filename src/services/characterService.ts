import * as generalRepository from "../repositories/generalRepository";
import * as adventureRepository from "../repositories/adventureRepository";
import * as characterRepository from "../repositories/characterRepository";
import * as characterTypes from "../types/characterTypes";

import {
  notFoundError,
  unauthorizedError,
} from "../middlewares/errorMiddleware";

export async function createCharacter(
  userId: number,
  character: characterTypes.ICharacterData
) {
  const user = await generalRepository.findUserById(userId);

  if (!user) throw notFoundError("user");
  const adventure = await adventureRepository.findAdventureById(
    character.adventureId
  );

  if (!adventure) throw notFoundError("adventure");
  if (adventure.userId !== user.id) throw unauthorizedError("User");

  return await characterRepository.insertCharacter(character);
}

export async function getCharacter(
  userId: number,
  adventureId: number,
  characterId: number
) {
  const user = await generalRepository.findUserById(userId);

  if (!user) throw notFoundError("user");
  const adventure = await adventureRepository.findAdventureById(adventureId);

  if (!adventure) throw notFoundError("adventure");
  if (adventure.userId !== user.id) throw unauthorizedError("User");

  return await characterRepository.findCharacter(characterId);
}

export async function deleteCharacter(userId: number, characterId: number) {
  const user = await generalRepository.findUserById(userId);

  if (!user) throw notFoundError("user");
  const character = await characterRepository.findCharacter(characterId);
  if (!character) throw notFoundError("character");
  const adventure = await adventureRepository.findAdventureById(
    character.adventureId
  );
  if (!adventure) throw notFoundError("adventure");
  if (adventure.userId !== user.id) throw unauthorizedError("User");

  return characterRepository.deleteCharacterById(characterId);
}

export async function updateCharacter(
  userId: number,
  characterId: number,
  characterUpdateData: characterTypes.ICharacterUpdateData
) {
  const user = await generalRepository.findUserById(userId);

  if (!user) throw notFoundError("user");
  const character = await characterRepository.findCharacter(characterId);
  if (!character) throw notFoundError("character");
  const adventure = await adventureRepository.findAdventureById(
    character.adventureId
  );
  if (!adventure) throw notFoundError("adventure");
  if (adventure.userId !== user.id) throw unauthorizedError("User");

  return await characterRepository.updateCharacter(
    characterId,
    characterUpdateData
  );
}
