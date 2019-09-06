import {post,get} from './http';
import commonUtil from './commonUtil';
import GithubConfig from './GithubConfig';

enum GithubUrlEnum {
    toLogin = 'https://github.com/login/oauth/authorize',// 登录转跳
    getToken = 'https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token', // 获取用户access_token
    labelsList4Repository = 'https://api.github.com/repos/:owner/:repo/labels', // 获取标签列表
    labelsMilestones4Repository = 'https://api.github.com/repos/:owner/:repo/milestones', // 获取里程碑列表
    getRepoInfo = 'https://api.github.com/repos/:owner/:repo',
    getIssuesList = 'https://api.github.com/repos/:owner/:repo/issues', // 获取博客信息
    getUserInfo = 'https://api.github.com/users/:owner',// 根据用户名获取用户信息
    getMdContent = 'https://api.github.com/markdown',// 获取markdown内容
    getIssuesContent = 'https://api.github.com/repos/:owner/:repo/issues/:issue_number', // 获取博客信息
    getCommentList4Issues = 'https://api.github.com/repos/:owner/:repo/issues/:issue_number/comments',//获取单个issues 中 comment 列表
    createComment = 'https://api.github.com/repos/:owner/:repo/issues/:issue_number/comments', // 添加评论
    getLoginUserInfo = 'https://api.github.com/user' // 根据token获取用户数据
}

class GithubApi {
    private _get : Function = get;
    private _post : Function = post;
    private readonly _clientId:string;
    private readonly _clientSecret:string;
    private readonly _owner:string;
    private readonly _repo:string;

    constructor({clientId,clientSecret,owner,repo}:{clientId:string,clientSecret:string,owner:string,repo:string}){
        console.log('被示例化了',clientSecret);
        this._clientId = clientId;
        this._clientSecret = clientSecret;
        this._owner = owner;
        this._repo = repo;
    }
    /**
     *  发送get请求让用户进行登录
     * @param publicRepo scope级别(请不要随便更改) 文档:https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/
     * @param redirectUri 用户登录成功后的跳转地址填空转跳到配置的地址中
     */
    toLogin(redirectUri:string=''):void{
        window.open(GithubUrlEnum.toLogin+`?scope=public_repo&client_id=${this._clientId}&client_secret=${this._clientSecret}${redirectUri?'&redirect_uri='+redirectUri:''}`,'_self');
    }
    getToken({code}:{code:string}):Promise<Object>{
        //此处地址需要转发否则跨域
        return new Promise(async (resolve, reject) => {
            let res =await this._get(GithubUrlEnum.getToken,{code:code,client_id:this._clientId,client_secret:this._clientSecret});
            let getTokenResult = commonUtil.urlParam2Json(res);
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
    /**
     * 查询库中的所有labels
     */
    async labelsList4Repository(){
        return new Promise(async (resolve, reject) => {
            let realUrl = commonUtil.replaceGithubUrl(GithubUrlEnum.labelsList4Repository,this);
            // 这个接口完全没有任何筛选功能...f*ck
            let res = await this._get(realUrl,{});
            resolve(res)
        });
    }

    /**
     * 获取 repo中的里程碑 已弃用 issues中不能通过 里程碑检索
     * @param state
     * @param sort
     * @param page
     * @param perPage
     */
    async milestonesList4Repository({state,page,perPage}:{state?:string,page?:number,perPage?:number}={}){
        return new Promise(async (resolve, reject) => {
            let realUrl = commonUtil.replaceGithubUrl(GithubUrlEnum.labelsMilestones4Repository,this);
            page = page||1;
            perPage = perPage||20;
            let res = await this._get(realUrl,{state,page,'per_page':perPage});
            resolve(res)
        });
    }
    async getRepoInfo(){
        return new Promise(async (resolve, reject) => {
            let realUrl = commonUtil.replaceGithubUrl(GithubUrlEnum.getRepoInfo,this);
            let res = await this._get(realUrl);
            resolve(res)
        });
    }

    /**
     * 获取issues的list
     * @param creator
     * @param milestone
     * @param labels
     * @param page
     * @param perPage
     */
    async getIssuesList({creator,milestone,labels,page,perPage}:{creator?:string,milestone?:string|number,labels?:string,page?:number,perPage?:number}={}){
        return new Promise(async (resolve, reject) => {
            let realUrl = commonUtil.replaceGithubUrl(GithubUrlEnum.getIssuesList,this);
            creator = creator||this._owner;
            page = page||1;
            perPage = perPage||10;
            milestone = milestone||'*';
            let res = await this._get(realUrl,{creator,milestone,labels,page,'per_page':perPage});
            resolve(res)
        });
    }
    async getBloggerInfo(){
        return new Promise(async (resolve, reject) => {
            let realUrl = commonUtil.replaceGithubUrl(GithubUrlEnum.getUserInfo,this);
            let res = await this._get(realUrl,{});
            resolve(res)
        });
    }
    async getMdContent({text}:{text:string}={text:''}){
        return new Promise(async (resolve, reject) => {
            let res = await this._post(GithubUrlEnum.getMdContent,{context: "github/gollum",mode: "markdown",text: text});
            resolve(res)
        });
    }
    async getIssuesContent({issueNumber}:{issueNumber:any}={issueNumber:0}){
        return new Promise(async (resolve, reject) => {
            let realUrl = commonUtil.replaceGithubUrl(GithubUrlEnum.getIssuesContent,this);
            realUrl = commonUtil.replaceGithubUrl(realUrl,{_issue_number:issueNumber});
            let res = await this._get(realUrl);
            resolve(res)
        });
    }
    async getCommentList4Issues({issueNumber,page,perPage}:{issueNumber:any,page?:number,perPage?:number}={issueNumber:0}){
        // getIssuesContent 中 comments 可以得到总条数
        return new Promise(async (resolve, reject) => {
            page = page||1;
            perPage = perPage||10;
            let realUrl = commonUtil.replaceGithubUrl(GithubUrlEnum.getCommentList4Issues,this);
            realUrl = commonUtil.replaceGithubUrl(realUrl,{_issue_number:issueNumber});
            let res = await this._get(realUrl,{page,'per_page':perPage});
            resolve(res)
        });
    }

    /**
     * 创建一条评论 需要登录
     * @param comment
     * @param issueNumber
     */
    async createComment({comment,issueNumber}:{comment:string,issueNumber:string}){
        return new Promise(async (resolve, reject) => {
            let realUrl = commonUtil.replaceGithubUrl(GithubUrlEnum.createComment,this);
            realUrl = commonUtil.replaceGithubUrl(realUrl,{_issue_number:issueNumber});

            let res = await this._post(realUrl,{body:comment});

            if(res.id){
                resolve(res)
            }
        });
    }
    async getLoginUserInfo(){
        return new Promise(async (resolve, reject) => {
            let res = await this._get(GithubUrlEnum.getLoginUserInfo);
            if(res.id){
                resolve(res)
            }
        });
    }


}
export default GithubApi;





//https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/ 登录OAuth文档

