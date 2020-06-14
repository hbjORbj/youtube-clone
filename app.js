import express from "express";
import es6Renderer from "express-es6-template-engine";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import logger from "morgan";
import helmet from "helmet";
import globalRouter from "./routers/globalRouter";

const app = express();

app.engine("html", es6Renderer);
app.set("views", "views");
app.set("view engine", "html");
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));

app.use("/", globalRouter);

export default app;
