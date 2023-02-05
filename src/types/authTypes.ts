import { User } from "@prisma/client";

export type IUserData = Omit<User, "id" | "createdAt">;

export type IUserLogin = Omit<User, "id" | "createdAt" | "picture" | "name">;
