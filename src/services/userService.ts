import * as userTypes from "../types/userTypes";
import * as userRepository from "../repositories/userRepository";
import * as generalRepository from "../repositories/generalRepository";
import * as generalUtils from "../utils/generalUtils";
import bcrypt from "bcrypt";
import { exclude } from "../utils/prismaUtils";
import { notFoundError } from "../middlewares/errorMiddleware";

export async function getUser(id: number) {
  return await generalRepository.findUserById(id);
}

export async function updateUserData(
  updateData: userTypes.updateUser,
  id: number
) {
  const user = await generalRepository.findUserById(id);

  if (!user) throw notFoundError("user");

  if (updateData.email) {
    testingEmailConflict(updateData.email, user.email);
  }

  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 12);
  }
  const updatedUser = await userRepository.updateUser(id, updateData);
  return {
    user: exclude(updatedUser, "password"),
  };
}

async function testingEmailConflict(newEmail: string, oldEmail: string) {
  if (newEmail !== oldEmail) {
    const emailExist = await generalRepository.findByEmail(newEmail);

    generalUtils.verifyEmailConflict(emailExist);
  }
}
