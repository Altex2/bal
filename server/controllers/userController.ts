import prisma from "@/lib/prisma";

export const voteConcurenti = async (req: Request, res: Response) => {
  const existingUser = await prisma.user.findFirst({
    where: { email: email },
  });

  // middleware check
  const session = await ActiveSession.findOne({ where: { token: token } });
  if (!session) {
    return { status: "ERROR", errorMessage: "Invalid session token." };
  }

  // ficare utilizator poate sa voteze un miss si un mr
  let canVote;
  if (gender === "F") {
    canVote = existingUser?.voteFata === true ? false : true;
  } else if (gender === "M") {
    canVote = existingUser?.voteBaiat === true ? false : true;
  }

  if (canVote) {
    const concurent = await TabelaVoturi.findOne({
      where: { id: idConcurent },
    });

    await concurent?.increment("count", { by: 1 });
    await concurent?.save;

    if (gender === "F") {
      await existingUser?.update({ voteFata: true });
      await existingUser?.update({ voteFataName: concurent?.name });
    } else if (gender === "M") {
      await existingUser?.update({ voteBaiat: true });
      await existingUser?.update({ voteBaiatName: concurent?.name });
    }
  } else {
    return { status: "ERROR", errorMessage: "Ai votat deja" };
  }

  return { status: "ok" };
};
