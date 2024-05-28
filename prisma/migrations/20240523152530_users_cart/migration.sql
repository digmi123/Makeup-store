-- CreateTable
CREATE TABLE "UsersCart" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "UsersCart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UsersCart" ADD CONSTRAINT "UsersCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersCart" ADD CONSTRAINT "UsersCart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
