const router = require("koa-router")();


router.get("/navigation", async (ctx) => {
  ctx.body = {
    naviList: [
      "BD代办任务",
      "项目查询",
      "上货进度看板",
      "供应商管理",
      "门店管理",
      "上单",
      "合同管理",
      "广告管理",
      "预付报销管理",
      "返佣协议管理",
      "诊断罗盘"     
    ]
  };
});
module.exports = router;