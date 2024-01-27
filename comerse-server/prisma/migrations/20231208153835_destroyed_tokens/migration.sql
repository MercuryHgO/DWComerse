/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "DestoryedTokens" (
    "token" TEXT NOT NULL,
    "destroyAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DestoryedTokens_pkey" PRIMARY KEY ("token")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");
