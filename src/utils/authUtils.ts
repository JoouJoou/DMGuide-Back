import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../middlewares/errorMiddleware";
import { User } from "@prisma/client";

export function verifyEmailExistance(emailExist: User | null) {
  if (!emailExist) throw notFoundError("Email");
}

export function verifyPasswords(passwordMatch: boolean) {
  if (!passwordMatch) throw unauthorizedError("Password");
}
