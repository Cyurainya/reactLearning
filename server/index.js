const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser')

const getPoisInfo = require('./src/getPoisInfo');
const user = require('./src/user');
const navigation = require('./src/navigation');

const cors = require('koa2-cors');
const app = new Koa();




app.use(async(ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method == 'OPTIONS') {
        ctx.body = 200;
    } else {
        await next();
    }
});


router.get('/navigation', navigation);
router.get('/user', user);
router.post('/getPoisInfo', getPoisInfo);


app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.on("error", (err, ctx) => {
    console.error("Ooops..\n", err);
});

app.listen(7000, () => {
    console.log('[Server] starting at port 7000');
});
