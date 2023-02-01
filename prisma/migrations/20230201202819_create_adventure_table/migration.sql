-- CreateTable
CREATE TABLE "adventures" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "adventureName" VARCHAR(255) NOT NULL,
    "adventureBanner" VARCHAR(255) NOT NULL,
    "Description" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "adventures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "adventures" ADD CONSTRAINT "adventures_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
