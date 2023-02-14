import { prisma } from "../config/database";
import * as characterTypes from "../types/characterTypes";

export async function insertCharacter(
  character: characterTypes.ICharacterData
) {
  return await prisma.character.create({
    select: {
      adventureId: true,
      characterName: true,
      characterPicture: true,
      height: true,
      age: true,
      race: true,
      characterBackground: true,
      playlist: true,
    },
    data: character,
  });
}

export async function findCharacter(characterId: number) {
  return await prisma.character.findFirst({
    where: { id: characterId },
  });
}

export async function deleteCharacterById(characterId: number) {
  return await prisma.character.delete({
    where: { id: characterId },
  });
}

export async function updateCharacter(
  characterId: number,
  updateData: characterTypes.ICharacterUpdateData
) {
  return await prisma.character.update({
    where: { id: characterId },
    data: updateData,
  });
}
