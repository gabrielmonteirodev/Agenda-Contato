/*
  Warnings:

  - You are about to drop the `Contato` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Contato";

-- CreateTable
CREATE TABLE "contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "tellNumber" TEXT NOT NULL,
    "cellNumber" TEXT NOT NULL,
    "observation" TEXT NOT NULL,

    CONSTRAINT "contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contact_name_key" ON "contact"("name");

-- CreateIndex
CREATE UNIQUE INDEX "contact_lastName_key" ON "contact"("lastName");

-- CreateIndex
CREATE UNIQUE INDEX "contact_cellNumber_key" ON "contact"("cellNumber");
