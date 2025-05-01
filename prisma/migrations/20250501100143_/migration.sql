/*
  Warnings:

  - The values [INSTRUCTOR,CANDIDATE] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the `options` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `questions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quizzes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `responses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `submissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subscription_plans` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_subscriptions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `violations` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('ADMIN', 'MEMBERS');
ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'MEMBERS';
COMMIT;

-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_question_id_fkey";

-- DropForeignKey
ALTER TABLE "payments" DROP CONSTRAINT "payments_user_id_fkey";

-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_quiz_id_fkey";

-- DropForeignKey
ALTER TABLE "quizzes" DROP CONSTRAINT "quizzes_created_by_fkey";

-- DropForeignKey
ALTER TABLE "responses" DROP CONSTRAINT "responses_question_id_fkey";

-- DropForeignKey
ALTER TABLE "responses" DROP CONSTRAINT "responses_submission_id_fkey";

-- DropForeignKey
ALTER TABLE "submissions" DROP CONSTRAINT "submissions_candidate_id_fkey";

-- DropForeignKey
ALTER TABLE "submissions" DROP CONSTRAINT "submissions_quiz_id_fkey";

-- DropForeignKey
ALTER TABLE "user_subscriptions" DROP CONSTRAINT "user_subscriptions_plan_id_fkey";

-- DropForeignKey
ALTER TABLE "user_subscriptions" DROP CONSTRAINT "user_subscriptions_user_id_fkey";

-- DropForeignKey
ALTER TABLE "violations" DROP CONSTRAINT "violations_candidate_id_fkey";

-- DropForeignKey
ALTER TABLE "violations" DROP CONSTRAINT "violations_submission_id_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'MEMBERS';

-- DropTable
DROP TABLE "options";

-- DropTable
DROP TABLE "payments";

-- DropTable
DROP TABLE "questions";

-- DropTable
DROP TABLE "quizzes";

-- DropTable
DROP TABLE "responses";

-- DropTable
DROP TABLE "submissions";

-- DropTable
DROP TABLE "subscription_plans";

-- DropTable
DROP TABLE "user_subscriptions";

-- DropTable
DROP TABLE "violations";

-- DropEnum
DROP TYPE "IntervalType";

-- DropEnum
DROP TYPE "PaymentStatus";

-- DropEnum
DROP TYPE "QuestionType";

-- DropEnum
DROP TYPE "SubmissionType";

-- DropEnum
DROP TYPE "ViolationType";

-- DropEnum
DROP TYPE "paymentMethod";

-- DropEnum
DROP TYPE "planType";
