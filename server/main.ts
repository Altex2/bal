import "dotenv/config";
import express, { type Express, type Request, type Response } from "express";
import { existsSync } from "node:fs";
import path from "node:path";
import { prisma } from "./lib/prisma.js";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth.js";
import { userRouter } from "./routes/user.js";
import morgan from "morgan";

const app: Express = express();
const port = Number(process.env.PORT || 4000);

app.set("trust proxy", true);
app.use(morgan("combined"));
// Better Auth parses its own body, so it is mounted before express.json()
app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json());
app.use("/api", userRouter);

// In production the React build is served from the same origin as the API
const clientBuild = path.resolve(
  process.env.CLIENT_BUILD_DIR || "../client/build",
);
if (existsSync(clientBuild)) {
  app.use(express.static(clientBuild));
  app.get("/{*any}", (req: Request, res: Response) => {
    res.sendFile(path.join(clientBuild, "index.html"));
  });
}

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  prisma.$connect().catch((e) => {
    console.error("CANT REACH DB");
    console.error(e);
    process.exit(1);
  });
});

const shutDownServer = async () => {
  console.log("Shuting down");
  server.close(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
};

process.on("SIGINT", shutDownServer);
process.on("SIGTERM", shutDownServer);
