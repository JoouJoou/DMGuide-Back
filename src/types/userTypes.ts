import { User } from "@prisma/client";
import { exclude } from "../utils/prismaUtils";

export type updateUser = {
  id?: number;
  email?: string;
  name?: string;
  picture?: string;
  password?: string;
}; //não quero usar Partial
