import { prisma } from "../config/database";
import { Prisma } from "@prisma/client";
import * as authTypes from "../types/authTypes";

export async function insertUser(userData: authTypes.IUserData, userId = 0) {
  return await prisma.user.create({
    select: {
      email: true,
      name: true,
      picture: true,
      password: true,
    },
    data: userData,
  });
}
