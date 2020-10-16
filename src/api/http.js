import axios from 'axios'

const service = axios.create({
    baseURL: "http://localhost:7000",
    timeout: 3000,
});


function request(
    autoCatch = false
) {
  function get(...args) {

    return service.get(...args).then(res => {

          console.log(res);

            // let code = res.data.code;

            // if (code) { //code是1 就是err
            //     if (autoCatch) {
            //         console.log("err!");
            //     } else {
            //       //这里后面不能catch到是因为要有一个return才可以
            //       //如果没有返回的话会被认为只是then的内部错误 这是不会传递到下一个的
                  
            //       //Promise.reject(res.data.message); 
                  
            //          throw new Error();
            //     }
            // }
            return res;

        });
    }
    return {
        get
    };
}

export {request}