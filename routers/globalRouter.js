import express from "express";
import { home } from "../controllers/videoController";
import routes from "../routes";
import { getJoin, getLogin } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.get(routes.login, getLogin);

export default globalRouter;
