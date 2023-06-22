/*
  Warnings:

  - Made the column `name` on table `customers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "customers" ALTER COLUMN "name" SET NOT NULL;
