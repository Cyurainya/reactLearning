import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:7000",
  timeout: 3000,
});

function request(autoCatch = false) {
  function get(...args) {
    return service.get(...args).then((res) => {
      console.log(res);

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
      return res;
    });
  }
  return {
    get,
  };
}

export { request };
