
let commonUtil = {
    //将url?后面截取的字符串转为json对象;
    urlParam2Json:(params:any)=>{
        let paramArr = params.split('&');
        let res:any = {};
        for(let i = 0;i<paramArr.length;i++){
            let str = paramArr[i].split('=');
            res[str[0]]=str[1];
        }
    },
    // 将json转为get的url参数;
    json2UrlParam:function (param:any, key?:string, encode?:string) {
        if (param==null) return '';
        let paramStr = '';
        let t = typeof (param);
        if (t == 'string' || t == 'number' || t == 'boolean') {
            paramStr += '&' + key + '='  + ((encode==null||encode) ? encodeURIComponent(param) : param);
        } else {
            for (let i in param) {
                let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
                paramStr += commonUtil.json2UrlParam(param[i], k, encode);
            }
        }
        return paramStr;
    }
}

export default commonUtil;
