import express, { type Express, type Request, type Response } from "express";
import { prisma } from "./lib/prisma.js";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth.js";
import morgan from "morgan";

const app: Express = express();
const port = 3000;

app.use(morgan("combined"));
app.use(express.json());
app.all("/api/auth/{*any}", toNodeHandler(auth));
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
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
