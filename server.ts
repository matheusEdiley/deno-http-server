import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", (context) => {
  const res = {
    "res": "Deno http Server"
  };
  context.response.body = res;
});

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

const port = 8000;
app.listen({ "port": port });
console.log(`Server running on port ${port}`); 