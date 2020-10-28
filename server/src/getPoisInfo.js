module.exports = async(ctx) => {
  const { key } = ctx.request.body.request;

  const gap = Math.floor(Math.random()*4) * 1000;

  const errorGenerate = function() {
    return Math.floor(Math.random()*10) === 0;
  }

  const mockData = '[{"partnerId":920894,"partnerName":"番茄花园集团","partnerShortName":"番茄花园大酒店","partnerTypeId":1,"partnerType":"第三方渠道","cooperationType":[0,2],"bd":{"id":2424106,"login":"xiaoming","email":null,"mobile":null,"name":"小明","warZone":null,"role":null},"accountNum":0,"privateSeaBd":null,"serviceStatusId":1,"digitalCertificates":null,"serviceStatus":"正常合作","baseInfoModel":{"poiId":61137679,"poiName":"南极洲刘坷","brandName":"","cityName":"北京市","districtName":"朝阳区","bizAreaName":null,"typeId":166,"typeName":"一星级","phone":"010-98678326","address":"北苑路甲13号北辰泰岳大厦12号","status":"营业中","info":"本店客房温馨舒适，服务周到热情，竭诚欢迎您的光临。","latitude":40032024,"longitude":116417271,"mergeId":0},"upgradeStatus":null,"overseaPartner":null},{"partnerId":4356543,"partnerName":"双写下线test88","partnerShortName":"test88","partnerTypeId":1,"partnerType":"第三方渠道","cooperationType":[0,2],"bd":{"id":2313915,"login":"xiaoming","email":null,"mobile":null,"name":"小明","warZone":null,"role":null},"accountNum":2,"privateSeaBd":null,"serviceStatusId":1,"digitalCertificates":null,"serviceStatus":"正常合作","baseInfoModel":{"poiId":84215291,"poiName":"南极洲测试","brandName":"","cityName":"南极洲","districtName":"南极洲","bizAreaName":null,"typeId":387,"typeName":null,"phone":"","address":"南极大道长安街段09号","status":"营业中","info":"","latitude":-78442950,"longitude":47603550,"mergeId":0},"upgradeStatus":null,"overseaPartner":null},{"partnerId":3297876,"partnerName":"（停用）成都数联生活商务服务有限公司","partnerShortName":"成都数联生活（第三方）","partnerTypeId":1,"partnerType":"第三方渠道","cooperationType":[0,3,2,1],"bd":{"id":2100002,"login":"xiaoming","email":null,"mobile":null,"name":"小明","warZone":null,"role":null},"accountNum":0,"privateSeaBd":null,"serviceStatusId":null,"digitalCertificates":null,"serviceStatus":null,"baseInfoModel":{"poiId":93564872,"poiName":"南极洲测试","brandName":"","cityName":"伊犁哈萨克自治州","districtName":"奎屯市","bizAreaName":null,"typeId":782,"typeName":null,"phone":"15001604456","address":"测试南极洲","status":"筹建中","info":"","latitude":31911392,"longitude":120327896,"mergeId":0},"upgradeStatus":null,"overseaPartner":null},{"partnerId":4356543,"partnerName":"双写下线test88","partnerShortName":"test88","partnerTypeId":1,"partnerType":"第三方渠道","cooperationType":[0,2],"bd":{"id":2313915,"login":"xiaoming","email":null,"mobile":null,"name":"小明","warZone":null,"role":null},"accountNum":2,"privateSeaBd":null,"serviceStatusId":1,"digitalCertificates":null,"serviceStatus":"正常合作","baseInfoModel":{"poiId":75562009,"poiName":"南极洲测试","brandName":"","cityName":"南极洲","districtName":"南极洲","bizAreaName":null,"typeId":355,"typeName":null,"phone":"18644058716","address":"1号。。","status":"已倒闭","info":"","latitude":-78442950,"longitude":47603550,"mergeId":0},"upgradeStatus":null,"overseaPartner":null},{"partnerId":3963433,"partnerName":"测试普通供应商","partnerShortName":"测试啊啊","partnerTypeId":1,"partnerType":"第三方渠道","cooperationType":[0,2],"bd":{"id":93158,"login":"xiaoming","email":null,"mobile":null,"name":"小明","warZone":null,"role":null},"accountNum":0,"privateSeaBd":null,"serviceStatusId":1,"digitalCertificates":null,"serviceStatus":"正常合作","baseInfoModel":{"poiId":70879977,"poiName":"南极洲测试酒店","brandName":"","cityName":"南极洲","districtName":"南极洲","bizAreaName":null,"typeId":166,"typeName":"一星级","phone":"13121081175","address":"1号，，，","status":"已倒闭","info":"特别特别特别特别牛逼的门店","latitude":-70871593,"longitude":112479153,"mergeId":0},"upgradeStatus":null,"overseaPartner":null},{"partnerId":6130,"partnerName":"沈阳好到家酒店管理有限公司","partnerShortName":null,"partnerTypeId":null,"partnerType":null,"cooperationType":null,"bd":{"id":29349,"login":"xiaoming","email":null,"mobile":null,"name":"小明","warZone":null,"role":null},"accountNum":0,"privateSeaBd":{"id":0,"login":null,"email":null,"mobile":null,"name":null,"warZone":null,"role":null},"serviceStatusId":1,"digitalCertificates":null,"serviceStatus":"正常合作","baseInfoModel":{"poiId":67878976,"poiName":"南极洲酒店","brandName":"","cityName":"北京市","districtName":"朝阳区","bizAreaName":null,"typeId":166,"typeName":"一星级","phone":"","address":"北苑路12号","status":"已倒闭","info":"","latitude":39922467,"longitude":116457557,"mergeId":0},"upgradeStatus":null,"overseaPartner":null},{"partnerId":6130,"partnerName":"沈阳好到家酒店管理有限公司","partnerShortName":null,"partnerTypeId":null,"partnerType":null,"cooperationType":null,"bd":{"id":29349,"login":"xiaoming","email":null,"mobile":null,"name":"小明","warZone":null,"role":null},"accountNum":0,"privateSeaBd":{"id":0,"login":null,"email":null,"mobile":null,"name":null,"warZone":null,"role":null},"serviceStatusId":1,"digitalCertificates":null,"serviceStatus":"正常合作","baseInfoModel":{"poiId":61137679,"poiName":"南极洲刘坷","brandName":"","cityName":"北京市","districtName":"朝阳区","bizAreaName":null,"typeId":166,"typeName":"一星级","phone":"010-98678326","address":"北苑路甲13号北辰泰岳大厦12号","status":"营业中","info":"本店客房温馨舒适，服务周到热情，竭诚欢迎您的光临。","latitude":40032024,"longitude":116417271,"mergeId":0},"upgradeStatus":null,"overseaPartner":null},{"partnerId":6130,"partnerName":"沈阳好到家酒店管理有限公司","partnerShortName":null,"partnerTypeId":null,"partnerType":null,"cooperationType":null,"bd":{"id":29349,"login":"xiaoming","email":null,"mobile":null,"name":"小明","warZone":null,"role":null},"accountNum":0,"privateSeaBd":{"id":0,"login":null,"email":null,"mobile":null,"name":null,"warZone":null,"role":null},"serviceStatusId":1,"digitalCertificates":null,"serviceStatus":"正常合作","baseInfoModel":{"poiId":5051936,"poiName":"南极洲宾馆","brandName":"","cityName":"九江市","districtName":"永修县","bizAreaName":null,"typeId":387,"typeName":null,"phone":"0792-3235358","address":"新城大道91号（新城图书馆院内）","status":"营业中","info":"配套设施齐全，住宿条件较好。周边景色别致，交通环境良好。","latitude":29014068,"longitude":115806236,"mergeId":0},"upgradeStatus":null,"overseaPartner":null},{"partnerId":6130,"partnerName":"沈阳好到家酒店管理有限公司","partnerShortName":null,"partnerTypeId":null,"partnerType":null,"cooperationType":null,"bd":{"id":29349,"login":"xiaoming","email":null,"mobile":null,"name":"小明","warZone":null,"role":null},"accountNum":0,"privateSeaBd":{"id":0,"login":null,"email":null,"mobile":null,"name":null,"warZone":null,"role":null},"serviceStatusId":1,"digitalCertificates":null,"serviceStatus":"正常合作","baseInfoModel":{"poiId":75562009,"poiName":"南极洲测试","brandName":"","cityName":"南极洲","districtName":"南极洲","bizAreaName":null,"typeId":355,"typeName":null,"phone":"18644058716","address":"1号。。","status":"已倒闭","info":"","latitude":-78442950,"longitude":47603550,"mergeId":0},"upgradeStatus":null,"overseaPartner":null},{"partnerId":6130,"partnerName":"沈阳好到家酒店管理有限公司","partnerShortName":null,"partnerTypeId":null,"partnerType":null,"cooperationType":null,"bd":{"id":29349,"login":"xiaoming","email":null,"mobile":null,"name":"小明","warZone":null,"role":null},"accountNum":0,"privateSeaBd":{"id":2041438,"login":"zhaotingting05","email":null,"mobile":null,"name":"赵婷婷","warZone":null,"role":null},"serviceStatusId":1,"digitalCertificates":null,"serviceStatus":"正常合作","baseInfoModel":{"poiId":84215291,"poiName":"南极洲测试","brandName":"","cityName":"南极洲","districtName":"南极洲","bizAreaName":null,"typeId":387,"typeName":null,"phone":"","address":"南极大道长安街段09号","status":"营业中","info":"","latitude":-78442950,"longitude":47603550,"mergeId":0},"upgradeStatus":null,"overseaPartner":null}]';

    async function deffer(time) {
      return new Promise(res => {
        setTimeout(() => res(), time);
      });
    }

    await deffer(gap);

  if (errorGenerate()) {
    ctx.body = JSON.stringify({
      code: 1,
      message: '系统错误，请稍后再试',
      data: [],
    });
  }


  if (key !== '南极洲') {
    ctx.body = JSON.stringify({
      code: 0,
      message: 'success',
      data: [],
    });
    return;
  }
  debugger
  ctx.body = JSON.stringify({
    code: 0,
    message: 'success',
    data: JSON.parse(mockData),
  })


}







