import { prisma } from "../config/database";
import { Prisma } from "@prisma/client";

export async function findByEmail(email: string) {
  const user = await prisma.user.findFirst({
    where: { email },
  });
  return user;
}

export async function findUserById(id: number) {
  const user = await prisma.user.findFirst({
    where: { id },
  });
  return user;
}
