import { Location } from "@prisma/client";

export type ILocationData = Omit<Location, "id" | "createdAt">;
