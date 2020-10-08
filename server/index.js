const Koa = require("koa");
const app = new Koa();
const user = require("./src/user");
const navigation = require("./src/navigation");


app.use(user.routes(), user.allowedMethods())
  .use(navigation.routes(),navigation.allowedMethods());

app.listen(3000, () => {
  console.log("[Server] starting at port 3000");
});