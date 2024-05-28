/*
  Warnings:

  - Added the required column `quantity` to the `UsersCart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UsersCart" ADD COLUMN     "quantity" INTEGER NOT NULL;
