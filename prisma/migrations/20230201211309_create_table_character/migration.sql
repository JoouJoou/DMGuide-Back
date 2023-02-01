/*
  Warnings:

  - You are about to drop the `Genre` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "adventures" DROP CONSTRAINT "adventures_genreId_fkey";

-- AlterTable
ALTER TABLE "adventures" ALTER COLUMN "Description" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "Genre";

-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "genreType" "gType" NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "characters" (
    "id" SERIAL NOT NULL,
    "adventureId" INTEGER NOT NULL,
    "characterName" VARCHAR(255) NOT NULL,
    "characterPicture" VARCHAR(255) NOT NULL,
    "Height" INTEGER NOT NULL,
    "Age" INTEGER NOT NULL,
    "Race" VARCHAR(255) NOT NULL,
    "characterBackground" TEXT NOT NULL,
    "Playlist" TEXT NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "adventures" ADD CONSTRAINT "adventures_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_adventureId_fkey" FOREIGN KEY ("adventureId") REFERENCES "adventures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
