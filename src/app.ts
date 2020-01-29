import Koa from "koa";
import bodyParser from "koa-bodyparser";
import convert from "koa-convert";
import cors from "koa-cors";
import Router from "@koa/router";

const app = new Koa();

const router = new Router();

app.use(bodyParser());
app.use(convert(cors({ maxAge: 86400, origin: "*" })));

router.get("/health", async ctx => {
  try {
    ctx.body = "Koa is healthy";
    ctx.status = 200;
  } catch (err) {
    ctx.body = err.toString();
    ctx.status = 400;
  }
});

app.use(router.routes()).use(router.allowedMethods());

export default app;
