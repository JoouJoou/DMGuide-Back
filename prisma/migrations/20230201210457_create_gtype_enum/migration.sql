/*
  Warnings:

  - Changed the type of `genreType` on the `Genre` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "gType" AS ENUM ('Medieval', 'Cyberpunk', 'Herois', 'Terror', 'Zumbis', 'Guerra');

-- AlterTable
ALTER TABLE "Genre" DROP COLUMN "genreType",
ADD COLUMN     "genreType" "gType" NOT NULL;
