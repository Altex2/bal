import { Request, Response } from "express";
import prisma from "../lib/prisma.js";

const OTP_PREFIX = "email-verification-otp-";

class AlreadyVotedError extends Error {}

export const getVoteStatus = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { id: req.betterAuthSession.user.id },
    select: { voteFata: true, voteBaiat: true },
  });
  res.json({
    status: "ok",
    canVoteF: user?.voteFata !== true,
    canVoteM: user?.voteBaiat !== true,
  });
};

// Each user can vote one girl (F) and one boy (M)
export const voteConcurent = async (req: Request, res: Response) => {
  const idConcurent = req.body?.idConcurent;
  if (typeof idConcurent !== "string") {
    return res
      .status(400)
      .json({ status: "ERROR", errorMessage: "idConcurent lipsa" });
  }

  const concurent = await prisma.concurent.findUnique({
    where: { id: idConcurent },
  });
  if (!concurent) {
    return res
      .status(404)
      .json({ status: "ERROR", errorMessage: "Concurent inexistent" });
  }

  const isF = concurent.gender === "F";
  const notVotedYet = isF
    ? { OR: [{ voteFata: false }, { voteFata: null }] }
    : { OR: [{ voteBaiat: false }, { voteBaiat: null }] };
  const markVoted = isF
    ? { voteFata: true, voteFataName: concurent.name }
    : { voteBaiat: true, voteBaiatName: concurent.name };

  try {
    await prisma.$transaction(async (tx) => {
      // Conditional update, so two parallel requests cannot both count
      const { count } = await tx.user.updateMany({
        where: { id: req.betterAuthSession.user.id, ...notVotedYet },
        data: markVoted,
      });
      if (count === 0) throw new AlreadyVotedError();

      await tx.concurent.update({
        where: { id: concurent.id },
        data: { count: { increment: 1 } },
      });
    });
  } catch (e) {
    if (e instanceof AlreadyVotedError) {
      return res
        .status(409)
        .json({ status: "ERROR", errorMessage: "Ai votat deja" });
    }
    throw e;
  }

  return res.json({ status: "ok" });
};

export const getUsers = async (req: Request, res: Response) => {
  const adminType = req.betterAuthSession.user.admin;
  const users = await prisma.user.findMany({ orderBy: { createdAt: "asc" } });

  // Pending email confirmation codes, shown so admins can help users who did not get the email
  const codes = await prisma.verification.findMany({
    where: {
      identifier: { startsWith: OTP_PREFIX },
      expiresAt: { gt: new Date() },
    },
  });
  const codeByEmail = new Map(
    codes.map((c) => [
      c.identifier.slice(OTP_PREFIX.length),
      c.value.split(":")[0],
    ]),
  );

  res.json({
    status: "ok",
    adminType,
    users: users.map((u) => ({
      email: u.email,
      voteFata: u.voteFata,
      voteBaiat: u.voteBaiat,
      // Vote names are visible to superadmin only
      ...(adminType === "superadmin"
        ? { voteFataName: u.voteFataName, voteBaiatName: u.voteBaiatName }
        : {}),
      admin: u.admin,
      verified: u.emailVerified,
      tokenConfirmEmail: codeByEmail.get(u.email) ?? null,
    })),
  });
};

export const getConcurenti = async (_req: Request, res: Response) => {
  const concurenti = await prisma.concurent.findMany();
  res.json({ status: "ok", concurenti });
};
