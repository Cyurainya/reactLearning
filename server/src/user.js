const router = require("koa-router")();


router.get("/user", async (ctx) => {
  ctx.body = {
    name: "testUser",
    phone:12345
  };
});
router.get("/user");
module.exports = router;