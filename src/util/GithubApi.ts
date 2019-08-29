import {post,get} from './http';
import commonUtil from './commonUtil';

enum GithubUrlEnum {
    toLogin = 'https://github.com/login/oauth/authorize',
    getToken = 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
}

class GithubApi {
    private _get : Function = get;
    private _post : Function = post;
    private readonly _clientId:string;
    private readonly _clientSecret:string;
    constructor({clientId,clientSecret}:{clientId:string,clientSecret:string}){
        console.log('被示例化了',clientSecret);
        this._clientId = clientId;
        this._clientSecret = clientSecret;
    }

    /**
     *  发送get请求让用户进行登录
     * @param publicRepo scope级别(请不要随便更改) 文档:https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
     * @param redirectUri 用户登录成功后的跳转地址填空转跳到配置的地址中
     */
    toLogin(publicRepo:string='public_repo',redirectUri:string=''):void{
        window.open(GithubUrlEnum.toLogin+`?scope=${publicRepo}&client_id=${this._clientId}&client_secret=${this._clientSecret}${redirectUri?'&redirect_uri='+redirectUri:''}`);
    }
    async getToken({code}:{code:string}){
        //此处地址需要转发否则跨域
        let result = await this._get(GithubUrlEnum.getToken,{code:code,client_id:this._clientId,client_secret:this._clientSecret});
        commonUtil.urlParam2Json(result);
        return new Promise((resolve, reject) => {
            this._get(GithubUrlEnum.getToken,{code:code,client_id:this._clientId,client_secret:this._clientSecret})
        })
    }
}
export default GithubApi;




//https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/ 登录OAuth文档

