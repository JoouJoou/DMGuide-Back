import * as authRepository from "../repositories/authRepository";
import * as generalRepository from "../repositories/generalRepository";
import * as authTypes from "../types/authTypes";
import * as authUtils from "../utils/authUtils";
import * as generalUtils from "../utils/generalUtils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { notFoundError } from "../middlewares/errorMiddleware";
import { exclude } from "../utils/prismaUtils";

export async function signUp(userData: authTypes.IUserData) {
  const emailExist = await generalRepository.findByEmail(userData.email);

  generalUtils.verifyEmailConflict(emailExist);

  const hashedPassword = await bcrypt.hash(userData.password, 12);

  return await authRepository.insertUser({
    email: userData.email,
    name: userData.name,
    picture: userData.picture,
    password: hashedPassword,
  });
}

export async function signIn(loginData: authTypes.IUserLogin) {
  const user = await getUserOrFail(loginData.email);

  await validatePasswordOrFail(loginData.password, user.password);

  const token = await createSession(user.id);

  return {
    user: exclude(user, "password"),
    token,
  };
}

async function getUserOrFail(email: string) {
  const emailExist = await generalRepository.findByEmail(email);

  if (!emailExist) throw notFoundError("email");

  return emailExist;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);

  authUtils.verifyPasswords(isPasswordValid);
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, String(process.env.JWT_SECRET));

  return token;
}
