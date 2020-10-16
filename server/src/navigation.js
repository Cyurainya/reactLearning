const router = require("koa-router")();


router.get("/navigation", async(ctx) => {
    ctx.body = {
        code:0,
        navList: [{
                icon: "MenuFoldOutlined",
                name: "BD代办任务",
                url: "/bdTask",
                detail: "BD代办任务BD代办任务"
            },
            {
                icon: "SwitcherOutlined",
                name: "项目查询",
                url: "/projects",
                detail: "项目查询"
            },
            {
                icon: "TagsOutlined",
                name: "上货进度看板",
                url: "/viewBoard",
                detail: "上货进度看板上货进度看板"
            },
            {
                icon: "UserDeleteOutlined",
                name: "供应商管理",
                url: "/supplierManage",
                detail: "供应商管理供应商管理"
            },
            {
                icon: "PushpinOutlined",
                name: "上单",
                url: "/order",
                detail: "上单上单上单"
            },
            {
                icon: "LinkOutlined",
                name: "合同",
                url: '/contract',
                detail: "合同合同"
            },
            {
                icon: "AudioOutlined",
                name: "广告管理",
                url: "/adManage",
                detail: "广告管理广告管理"
            },
            {
                icon: "MenuFoldOutlined",
                name: "预付报销管理",
                url: "/repaid",
                detail: "预付报销管理预付报销管理"
            },

            {
                icon: "BarcodeOutlined",
                name: "返佣协议管理",
                url: "/rebate",
                detail: "返佣协议管理返佣协议管理"
            },
            {
                icon: "DeploymentUnitOutlined",
                name: "诊断罗盘",
                url: "/diagnosis",
                detail: "诊断罗盘诊断罗盘"
            },

        ]
    };
});
module.exports = router;