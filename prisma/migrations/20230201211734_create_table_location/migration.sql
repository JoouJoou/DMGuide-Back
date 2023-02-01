-- AlterTable
ALTER TABLE "adventures" ALTER COLUMN "adventureBanner" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "characters" ALTER COLUMN "characterPicture" DROP NOT NULL,
ALTER COLUMN "characterPicture" SET DATA TYPE TEXT,
ALTER COLUMN "Height" DROP NOT NULL,
ALTER COLUMN "Age" DROP NOT NULL,
ALTER COLUMN "Race" DROP NOT NULL,
ALTER COLUMN "characterBackground" DROP NOT NULL,
ALTER COLUMN "Playlist" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "picture" DROP NOT NULL,
ALTER COLUMN "picture" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "adventureId" INTEGER NOT NULL,
    "locationName" VARCHAR(255) NOT NULL,
    "locationPicture" TEXT,
    "locationDescription" TEXT,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "locations" ADD CONSTRAINT "locations_adventureId_fkey" FOREIGN KEY ("adventureId") REFERENCES "adventures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
