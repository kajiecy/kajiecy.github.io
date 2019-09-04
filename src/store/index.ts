import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // issuesListPageNum:1,
        // issuesListPageSize:10,
        // issuesListPageMilestone:'',
        // issuesListPageLabel:'',
        qiniuDomainName:'http://qiniu.kajie88.com/',
        defaultImg:'http://qiniu.kajie88.com/e6f4b13bb6cd1d6a109e1ae85120f33f.jpg',
        labelsList:[],
        milestonesList:[],
        repoInfo:{},
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
    },
    getters:{

    },
    actions: {

    }
})
