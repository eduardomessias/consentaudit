/*
  Warnings:

  - You are about to drop the `ClientSecret` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "ClientApplication" ADD COLUMN     "credentialsId" TEXT,
ADD COLUMN     "tenantId" TEXT;

-- DropTable
DROP TABLE "ClientSecret";

-- CreateTable
CREATE TABLE "ResourceOwner" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ResourceOwner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "resourceOwnerId" TEXT NOT NULL,
    "tenantId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tenant" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientCredentials" (
    "id" TEXT NOT NULL,
    "secret" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientCredentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthorizationServer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "alias" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "clientApplicationId" TEXT,

    CONSTRAINT "AuthorizationServer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_resourceOwnerId_key" ON "User"("resourceOwnerId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_resourceOwnerId_fkey" FOREIGN KEY ("resourceOwnerId") REFERENCES "ResourceOwner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientApplication" ADD CONSTRAINT "ClientApplication_tenantId_fkey" FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientApplication" ADD CONSTRAINT "ClientApplication_credentialsId_fkey" FOREIGN KEY ("credentialsId") REFERENCES "ClientCredentials"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorizationServer" ADD CONSTRAINT "AuthorizationServer_clientApplicationId_fkey" FOREIGN KEY ("clientApplicationId") REFERENCES "ClientApplication"("id") ON DELETE SET NULL ON UPDATE CASCADE;
