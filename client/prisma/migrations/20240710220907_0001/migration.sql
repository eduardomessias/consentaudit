/*
  Warnings:

  - You are about to drop the column `callbackUrl` on the `Client` table. All the data in the column will be lost.
  - Added the required column `callback` to the `ClientApplication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "callbackUrl";

-- AlterTable
ALTER TABLE "ClientApplication" ADD COLUMN     "callback" TEXT NOT NULL;
