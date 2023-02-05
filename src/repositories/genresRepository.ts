import { prisma } from "../config/database";

export async function findGenres() {
  return await prisma.genre.findMany();
}
