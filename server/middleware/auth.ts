import { NextFunction, Request, Response } from "express";
import { auth } from "../auth.js";
import { fromNodeHeaders } from "better-auth/node";

type AuthSession = typeof auth.$Infer.Session;

declare module "express-serve-static-core" {
  interface Request {
    betterAuthSession: AuthSession;
  }
}

export const routeProtector = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  if (session === null) {
    return res
      .status(401)
      .json({ status: "ERROR", errorMessage: "Login first" });
  }
  req.betterAuthSession = session;
  return next();
};

// Use after routeProtector
export const requireAdmin =
  (...roles: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const role = req.betterAuthSession.user.admin;
    if (!role || !roles.includes(role)) {
      return res.status(403).json({ status: "ERROR", errorMessage: "Forbidden" });
    }
    return next();
  };
