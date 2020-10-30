import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:7000",
  // timeout: 6000,
  headers: {
    "Content-Type": "application/json",
  },
});

service.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.message.includes("timeout")) {
      console.log("错误回调", error);
      alert("网络超时");
    }
    return Promise.reject(error);
  }
);

function request(autoCatch = false) {
  //arg是参数
  function get(...args) {
    return service.get(...args).then((res) => {
      dataBack(res);
      return res;
    });
  }
  function post(...args) {
    return service.post(...args).then((res) => {
      dataBack(res);
      return res;
    });
  }
  function dataBack(res) {
    let code = res.data.code;
    if (code) {
      //code是1 就是err
      if (autoCatch) {
        console.log("err!");
      } else {
        console.log("throw err");
        throw Error();
      }
    }
  }
  return {
    get,
    post,
  };
}

export { request };
