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
      Description: true,
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
