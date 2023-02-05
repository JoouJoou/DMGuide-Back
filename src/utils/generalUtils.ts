import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../middlewares/errorMiddleware";
import { User } from "@prisma/client";

export function verifyEmailConflict(emailExist: User | null) {
  if (emailExist) throw conflictError("Email");
}
