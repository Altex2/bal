import { createAuthClient } from "better-auth/react";
import {
  emailOTPClient,
  inferAdditionalFields,
} from "better-auth/client/plugins";

// Same origin as the page: the dev server proxies /api, production serves both from Express
export const authClient = createAuthClient({
  plugins: [
    emailOTPClient(),
    inferAdditionalFields({
      user: {
        voteFata: { type: "boolean", required: false },
        voteBaiat: { type: "boolean", required: false },
        voteFataName: { type: "string", required: false },
        voteBaiatName: { type: "string", required: false },
        admin: { type: "string", required: false },
      },
    }),
  ],
});

const ERROR_MESSAGES: Record<string, string> = {
  INVALID_EMAIL_OR_PASSWORD: "Email sau parola incorecta",
  USER_ALREADY_EXISTS: "Exista deja un cont cu acest email",
  USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "Exista deja un cont cu acest email",
  PASSWORD_TOO_SHORT: "Parola trebuie sa aiba minim 8 caractere",
  INVALID_OTP: "Cod incorect",
  OTP_EXPIRED: "Codul a expirat",
  TOO_MANY_ATTEMPTS: "Prea multe incercari, cere un cod nou",
};

export const authErrorMessage = (error: {
  code?: string;
  message?: string;
}) => (error.code && ERROR_MESSAGES[error.code]) || error.message || "Eroare";
