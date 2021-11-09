import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 七牛图片的默认baseUrl
        qiniuDomainName:'http://qiniu.kajie88.com/',
        // 博客封面的默认图片
        defaultImg:'http://qiniu.kajie88.com/e6f4b13bb6cd1d6a109e1ae85120f33f.jpg',
        // 关于页面的issues请将这个issues关闭否则会出现在博客列表中
        aboutIssuesId:11,
        // github api配置项
        clientId:'bb75d376202e7c49a8b6',
        clientSecret:'b2cc94c423c87d09e'+'84119876e4abea998bfee07',
        owner:'kajiecy',
        repo:'kajiecy.github.io',


        labelsList:[],
        milestonesList:[],
        repoInfo:{open_issues_count:0},
        templateIssuesInfo:{},
    },
    mutations: {
        setLabelsList(state,labelsList:any){
            // @ts-ignore
            state.labelsList.splice(0,state.labelsList.length,...labelsList);
        },
        setMilestonesList(state,milestonesList:any){
            // @ts-ignore
            state.milestonesList.splice(0,state.milestonesList.length,...milestonesList);
        },
        setRepoInfo(state,repoInfo:any){
            state.repoInfo = repoInfo;
        },
        setTemplateIssuesInfo(state,templateIssuesInfo:any){
            state.templateIssuesInfo = templateIssuesInfo;
        },
    },
    getters:{

    },
    actions: {

    }
})
