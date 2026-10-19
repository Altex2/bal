import express from "express";
import { requireAdmin, routeProtector } from "../middleware/auth.js";
import {
  getConcurenti,
  getUsers,
  getVoteStatus,
  voteConcurent,
} from "../controllers/userController.js";

export const userRouter = express.Router();

userRouter.get("/vote", routeProtector, getVoteStatus);
userRouter.post("/vote", routeProtector, voteConcurent);
userRouter.get(
  "/admin/users",
  routeProtector,
  requireAdmin("admin", "superadmin"),
  getUsers,
);
userRouter.get(
  "/admin/concurenti",
  routeProtector,
  requireAdmin("superadmin"),
  getConcurenti,
);
