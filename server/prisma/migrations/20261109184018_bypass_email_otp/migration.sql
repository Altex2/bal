-- OTP bypass: new accounts default to verified, and existing unverified
-- accounts are marked verified so they can sign in without the email code.
ALTER TABLE "user" ALTER COLUMN "emailVerified" SET DEFAULT true;

UPDATE "user" SET "emailVerified" = true WHERE "emailVerified" = false;
