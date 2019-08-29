import axios from 'axios';
// axios.defaults.timeout = 5000;
// axios.defaults.baseURL ='';

/**
 * 用法
 * this.$post(URL(请求路径string),param(参数Obj),isAlert(错误提示标识,为false报错时不不弹框))
 *    .then(result=>{
 *        result:请求成功时，接口返回的data数据
 *    }).catch(error=>{
 *        error:请求失败时，接口返回的data数据
 *    })
 */


// http request 拦截器
axios.interceptors.request.use((config) => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    // console.log("========================>拦截到请求的 request",config)
    return config;
  },
        (error) => {
    return Promise.reject(error);
  }
);

// http response 拦截器
axios.interceptors.response.use((response) => {
    return response;
  },(error) => {
    return Promise.reject(error);
  }
)


/**
 * 封装post请求
 * @param url 请求路径 类型:string
 * @param data 参数 类型:obj
 * @param option  isAlert错误提示标识,为false报错时不不弹框 类型:boolean
 *
 */

export function post(url: string, data: any = {}, option: any = {}) {
    return new Promise((resolve, reject) => {
        let config = {headers:{Authorization:'token f321335d3b6d5b4adac0cef8f273a74f8613e2ca'}};
        // const loading = Loading.service({
        //   lock: true,
        //   text: '加载中...',
        //   // spinner: 'el-icon-loading',
        //   background: 'rgba(0, 0, 0, 0.0)'
        // });
        // console.log("声明了一个loadIng");
        axios.post(url, data,config)
            .then((response) => {
                console.log('response-->',response);
                resolve(response.data);
            }, (err) => {
                // loading.close();
                // console.log("关闭err");
                reject(err);
            });
    });
}

/**
 * 封装post请求
 * @param url 请求路径 类型:string
 * @param data 参数 类型:obj
 * @param option  isAlert错误提示标识,为false报错时不不弹框 类型:boolean
 *
 */

export function get(url: string, data: any = {}, option: any = {}) {

    let paramStr = urlEncode(data,null,null);
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((response) => {
                console.log(response);
                resolve(response);
            }, (err) => {
                // loading.close();
                // console.log("关闭err");
                reject(err);
            });
    });
}


function urlEncode  (param:any, key:string|null, encode:string|null) {
    if (param==null) return '';
    let paramStr = '';
    let t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '='  + ((encode==null||encode) ? encodeURIComponent(param) : param);
    } else {
        for (let i in param) {
            let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
            paramStr += urlEncode(param[i], k, encode)
        }
    }
    if(paramStr.length){
        // paramStr = paramStr.substring(1,paramStr.length);
    }
    return paramStr;
}
