import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../prisma/generated/client/client";

const createPrismaClient = () =>
  new PrismaClient({
    adapter: new PrismaPg({
      connectionString: process.env.DATABASE_URL,
    }),
  }).$extends({
    query: {
      user: {
        // OTP bypass: Better Auth inserts new users with emailVerified: false,
        // which makes sign-in ask for the email code. Every user is stored as
        // verified instead.
        create({ args, query }) {
          args.data.emailVerified = true;
          return query(args);
        },
      },
    },
  });

type ExtendedPrismaClient = ReturnType<typeof createPrismaClient>;

const globalForPrisma = globalThis as unknown as {
  prisma: ExtendedPrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
