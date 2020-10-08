const Koa = require("koa");
const app = new Koa();
const user = require("./src/user");
const navigation = require("./src/navigation");
const cors = require('koa2-cors');

app.use(cors())
app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
});

app.use(user.routes(), user.allowedMethods())
  .use(navigation.routes(),navigation.allowedMethods());

app.listen(5000, () => {
  console.log("[Server] starting at port 5000");
});