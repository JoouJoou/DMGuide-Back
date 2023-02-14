import { Character } from "@prisma/client";

export type ICharacterData = Omit<Character, "id" | "createdAt">;

export type ICharacterUpdateData = {
  characterName?: string;
  characterPicture?: string;
  height?: number;
  age?: number;
  race?: string;
  characterBackground?: string;
  playlist?: string;
};
