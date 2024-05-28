-- CreateEnum
CREATE TYPE "PaymentMethods" AS ENUM ('Visa', 'PayPal');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "paymentMethod" "PaymentMethods" NOT NULL DEFAULT 'Visa';
