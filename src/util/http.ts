import axios from 'axios';
import commonUtil from './commonUtil';
import GithubConfig from './GithubConfig';
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
    let token = localStorage.getItem(GithubConfig.LOCALSTORAGE_NAME);
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `token ${token}`
    }
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
        axios.post(url, data,option)
            .then((response) => {
                resolve(response.data);
            }, (err) => {
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
    let paramStr = commonUtil.json2UrlParam(data);
    return new Promise((resolve, reject) => {
        axios.get(url+'?'+paramStr)
            .then((response) => {
                resolve(response);
            }, (err) => {
                reject(err);
            });
    });
}


