-- CreateTable
CREATE TABLE "Contato" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "tellNumber" TEXT NOT NULL,
    "cellNumber" TEXT NOT NULL,
    "observation" TEXT NOT NULL,

    CONSTRAINT "Contato_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contato_name_key" ON "Contato"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Contato_lastName_key" ON "Contato"("lastName");

-- CreateIndex
CREATE UNIQUE INDEX "Contato_cellNumber_key" ON "Contato"("cellNumber");
