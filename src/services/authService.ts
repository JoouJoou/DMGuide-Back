import * as authRepository from "../repositories/authRepository";
import * as authTypes from "../types/authTypes";

export async function signUp(userData: authTypes.IUserData) {
  return await authRepository.insertUser(userData);
}
