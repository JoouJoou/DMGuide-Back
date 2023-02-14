import { Adventure } from "@prisma/client";

export type IAdventureDataPARTIAL = Omit<
  Adventure,
  "id" | "createdAt" | "userId"
>;

export type IAdventureDataFULL = Omit<Adventure, "id" | "createdAt">;

export type IAdventureUpdateData = {
  adventureName?: string;
  adventureBanner?: string;
  Description?: string;
};
