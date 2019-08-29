import {post,get} from './http';
import commonUtil from './commonUtil';
import GithubConfig from './GithubConfig';

enum GithubUrlEnum {
    toLogin = 'https://github.com/login/oauth/authorize',
    getToken = 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',
    createComment = 'https://api.github.com/repos/:owner/:repo/issues/:issue_number/comments',
}

class GithubApi {
    private _get : Function = get;
    private _post : Function = post;
    private readonly _clientId:string;
    private readonly _clientSecret:string;
    private readonly _owner:string;
    private readonly _repo:string;
    private readonly _issue_number:string;

    constructor({clientId,clientSecret,owner,repo,issueNumber}:{clientId:string,clientSecret:string,owner:string,repo:string,issueNumber:string}){
        console.log('被示例化了',clientSecret);
        this._clientId = clientId;
        this._clientSecret = clientSecret;
        this._owner = owner;
        this._repo = repo;
        this._issue_number = issueNumber;
    }

    /**
     *  发送get请求让用户进行登录
     * @param publicRepo scope级别(请不要随便更改) 文档:https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
     * @param redirectUri 用户登录成功后的跳转地址填空转跳到配置的地址中
     */
    toLogin(publicRepo:string='public_repo',redirectUri:string=''):void{
        window.open(GithubUrlEnum.toLogin+`?scope=${publicRepo}&client_id=${this._clientId}&client_secret=${this._clientSecret}${redirectUri?'&redirect_uri='+redirectUri:''}`);
    }
    getToken({code}:{code:string}):Promise<Object>{
        //此处地址需要转发否则跨域
        return new Promise(async (resolve, reject) => {
            let res =await this._get(GithubUrlEnum.getToken,{code:code,client_id:this._clientId,client_secret:this._clientSecret});
            let getTokenResult = commonUtil.urlParam2Json(res.data);
            if(!getTokenResult.error){
                //将token存到localStorage
                localStorage.setItem(GithubConfig.LOCALSTORAGE_NAME,getTokenResult.access_token);
                resolve(getTokenResult);
            }else {
                console.error(`授权失败：${getTokenResult.error}`);
                console.error(`参数文档：${getTokenResult.error_uri}`);
                reject(getTokenResult);
            }
        })
    }
    async createComment({comment}:{comment:string}){
        return new Promise(async (resolve, reject) => {
            let realUrl = commonUtil.replaceGithubUrl(GithubUrlEnum.createComment,this);
            let res = await this._post(realUrl,{body:comment});
            if(res.id){
                resolve(res)
            }
        });
    }
}
export default GithubApi;




//https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/ 登录OAuth文档

