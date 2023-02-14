import { prisma } from "../config/database";
import * as adventureTypes from "../types/adventureTypes";

export async function insertAdventure(
  adventure: adventureTypes.IAdventureDataFULL
) {
  return await prisma.adventure.create({
    select: {
      userId: true,
      genreId: true,
      adventureName: true,
      adventureBanner: true,
      description: true,
    },
    data: adventure,
  });
}

export async function findUserByIdWithAdventures(id: number) {
  const user = await prisma.user.findFirst({
    where: { id },
    include: {
      adventures: true,
    },
  });
  return user;
}

export async function findAdventureById(id: number) {
  return await prisma.adventure.findFirst({
    where: { id },
    include: {
      characters: true,
      locations: true,
    },
  });
}

export async function updateAdventure(
  id: number,
  data: adventureTypes.IAdventureUpdateData
) {
  return await prisma.adventure.update({
    where: { id },
    data: data,
  });
}

export async function deleteAdventureById(id: number) {
  return await prisma.adventure.delete({
    where: { id },
  });
}
