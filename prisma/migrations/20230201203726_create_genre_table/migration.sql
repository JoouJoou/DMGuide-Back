/*
  Warnings:

  - Added the required column `genreId` to the `adventures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "adventures" ADD COLUMN     "genreId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "genreType" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "adventures" ADD CONSTRAINT "adventures_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
