-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'pro', 'admin');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'user';
