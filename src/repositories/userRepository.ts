import { prisma } from "../config/database";
import * as userTypes from "../types/userTypes";

export async function updateUser(id: number, user: userTypes.updateUser) {
  return await prisma.user.update({
    where: { id },
    data: user,
  });
}
