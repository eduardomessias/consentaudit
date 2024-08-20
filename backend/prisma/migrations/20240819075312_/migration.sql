-- AlterTable
ALTER TABLE "ResourceOwner" ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Resource" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "resourceOwnerId" TEXT NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_resourceOwnerId_fkey" FOREIGN KEY ("resourceOwnerId") REFERENCES "ResourceOwner"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
