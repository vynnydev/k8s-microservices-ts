/*
  Warnings:

  - You are about to drop the column `customerId` on the `purchases` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `purchases` table. All the data in the column will be lost.
  - Added the required column `customer_id` to the `purchases` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `purchases` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_customerId_fkey";

-- DropForeignKey
ALTER TABLE "purchases" DROP CONSTRAINT "purchases_productId_fkey";

-- AlterTable
ALTER TABLE "purchases" DROP COLUMN "customerId",
DROP COLUMN "productId",
ADD COLUMN     "customer_id" TEXT NOT NULL,
ADD COLUMN     "product_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchases" ADD CONSTRAINT "purchases_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
