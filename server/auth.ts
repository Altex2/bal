import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import prisma from "./lib/prisma";

// const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    autoSignInAfterVerification: true,
    async sendResetPassword(data, request) {
      // Trimite email-ul de resetare a parolei folosind token-ul generat automat
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    async sendVerificationEmail(data, request) {
      // Trimite link-ul / token-ul de verificare pe email (UPB)
    },
  },
  user: {
    // Înregistrează câmpurile custom ca Better Auth să le includă în tipuri și sesiuni
    additionalFields: {
      voteBaiat: {
        type: "boolean",
        required: false,
        defaultValue: false,
        input: false, // Utilizatorul nu poate seta direct câmpul la register
      },
      voteFata: {
        type: "boolean",
        required: false,
        defaultValue: false,
        input: false,
      },
      voteFataName: {
        type: "string",
        required: false,
        defaultValue: "Nimeni",
        input: false,
      },
      voteBaiatName: {
        type: "string",
        required: false,
        defaultValue: "Nimeni",
        input: false,
      },
      admin: {
        type: "string",
        required: false,
        input: false,
      },
    },
  },
});
