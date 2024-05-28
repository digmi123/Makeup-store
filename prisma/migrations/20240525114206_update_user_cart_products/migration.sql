/*
  Warnings:

  - You are about to drop the `UsersCart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UsersCart" DROP CONSTRAINT "UsersCart_productId_fkey";

-- DropForeignKey
ALTER TABLE "UsersCart" DROP CONSTRAINT "UsersCart_userId_fkey";

-- DropTable
DROP TABLE "UsersCart";

-- CreateTable
CREATE TABLE "UsersProducts" (
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "colorId" INTEGER NOT NULL,

    CONSTRAINT "UsersProducts_pkey" PRIMARY KEY ("userId","productId")
);

-- AddForeignKey
ALTER TABLE "UsersProducts" ADD CONSTRAINT "UsersProducts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersProducts" ADD CONSTRAINT "UsersProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersProducts" ADD CONSTRAINT "UsersProducts_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
