/*
  Warnings:

  - Added the required column `order_description` to the `purchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "purchases" ADD COLUMN     "order_description" TEXT NOT NULL;
