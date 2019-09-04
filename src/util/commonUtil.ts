let commonUtil = {
    //将url?后面截取的字符串转为json对象;
    urlParam2Json:(params:any)=>{
        let paramArr = params.split('&');
        let res:any = {};
        for(let i = 0;i<paramArr.length;i++){
            let str = paramArr[i].split('=');
            res[str[0]]=str[1];
        }
        return res;
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
    },
    replaceGithubUrl : function (gitURL: string, param: any) {
        return gitURL.replace(/(:\w+)/gi, function(item){
                return param[item.replace(':',"_")]?param[item.replace(':',"_")]:item;
            }
        );
    }
};

export default commonUtil;
