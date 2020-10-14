const router = require("koa-router")();


router.get("/navigation", async(ctx) => {
    ctx.body = {
        naviList: [{
                icon: "<MenuFoldOutlined/>",
                name: "BD代办任务",
                url: "/bdtask",
            },
            {
                icon: "SwitcherOutlined",
                name: "项目查询",
                url: "/projects"
            },
            {
                icon: "TagsOutlined",
                name: "上货进度看板",
                url: "viewboard",
              
            },
            {
                icon: "UserDeleteOutlined",
                name: "供应商管理",
            },
            {
                icon: "PushpinOutlined",
                name: "上单",
            },
            {
                icon: "LinkOutlined",
                name: "合同",
            },
            {
                icon: "AudioOutlined",
                name: "广告管理",
            },
            {
                icon: "MenuFoldOutlined",
                name: "预付报销管理",
            },

            {
                icon: "BarcodeOutlined",
                name: "返佣协议管理",
            },
            {
                icon: "DeploymentUnitOutlined",
                name: "诊断罗盘"
            },

        ]
    };
});
module.exports = router;
