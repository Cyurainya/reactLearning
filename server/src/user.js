const router = require("koa-router")();

router.get("/user", async (ctx) => {
  ctx.body = {
    code: 0,
    name: "testUser",
    phone: 12345,
  };
});
router.get("/user");
module.exports = router;
