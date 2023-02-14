/*
  Warnings:

  - You are about to drop the column `Description` on the `adventures` table. All the data in the column will be lost.
  - You are about to drop the column `Age` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `Height` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `Playlist` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `Race` on the `characters` table. All the data in the column will be lost.
  - Added the required column `description` to the `adventures` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "adventures" DROP COLUMN "Description",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "characters" DROP COLUMN "Age",
DROP COLUMN "Height",
DROP COLUMN "Playlist",
DROP COLUMN "Race",
ADD COLUMN     "age" INTEGER,
ADD COLUMN     "height" INTEGER,
ADD COLUMN     "playlist" TEXT,
ADD COLUMN     "race" VARCHAR(255);
