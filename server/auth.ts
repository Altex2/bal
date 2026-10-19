import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { APIError } from "better-auth/api";
import { emailOTP } from "better-auth/plugins";

import prisma from "./lib/prisma.js";
import { sendMail } from "./lib/mailer.js";

// Accepts upb.ro and its subdomains (stud.upb.ro etc.)
const UPB_EMAIL = /@([a-z0-9-]+\.)*upb\.ro$/i;

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins: (process.env.TRUSTED_ORIGINS || "http://localhost:3000")
    .split(",")
    .map((origin) => origin.trim()),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    // With overrideDefaultEmailVerification these send the OTP from emailOTP below
    sendOnSignUp: true,
    sendOnSignIn: true,
    autoSignInAfterVerification: true,
  },
  plugins: [
    emailOTP({
      overrideDefaultEmailVerification: true,
      expiresIn: 600,
      async sendVerificationOTP({ email, otp, type }) {
        const mail =
          type === "forget-password"
            ? sendMail(
                email,
                "Resetarea parolei, Balul Bobocilor",
                `Codul pentru resetarea parolei este ${otp}. Codul este valabil 10 minute.`,
              )
            : sendMail(
                email,
                "Codul de verificare, Balul Bobocilor",
                `Codul de verificare este ${otp}. Codul este valabil 10 minute.`,
              );
        // Not awaited, so response time does not reveal whether the account exists
        mail.catch((e) => console.error("Email send failed", e));
      },
    }),
  ],
  databaseHooks: {
    user: {
      create: {
        async before(user) {
          if (!UPB_EMAIL.test(user.email)) {
            throw new APIError("BAD_REQUEST", {
              message: "Foloseste un mail valabil de la UPB",
            });
          }
        },
      },
    },
  },
  user: {
    additionalFields: {
      voteBaiat: {
        type: "boolean",
        required: false,
        defaultValue: false,
        input: false,
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
      // "admin" | "superadmin" | null, set directly in the database
      admin: {
        type: "string",
        required: false,
        input: false,
      },
    },
  },
});
