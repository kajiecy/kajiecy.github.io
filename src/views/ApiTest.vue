<template>
    <div class="home">
        <button @click="getUserInfo()">sendGet</button>
        <button @click="toLogin()">toLogin</button>
        <button @click="getToken()">getToken</button>
        <button @click="createComment()">createComment</button>
        <br>
        <button @click="getLabels()">getLabels</button>
        <button @click="getMilestones()">getMilestones</button>
        <button @click="getIssuesList()">getIssuesList</button>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import GithubApi from '@/util/GithubApi.ts'; // @ is an alias to /src

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class ApiTest extends Vue {
        // 一旦将完整的clientSecret提交到仓库中 github会重置我的clientSecret
        githubApi:GithubApi = new GithubApi({
            clientId:'bb75d376202e7c49a8b6',
            clientSecret:'b2cc94c423c87d09e'+'84119876e4abea998bfee07',
            owner:'kajiecy',
            repo:'kajiecy.github.io',
            issueNumber:'1'
        });

        created(){
        }
        mounted(){
        }
        getUserInfo(){
        }
        toLogin(){
            this.githubApi.toLogin();
        }
        async getToken(){
            await this.githubApi.getToken({code:'8fef7a8450de2e407ff2'});
        }
        async createComment(){
            let newCommentInfo = await this.githubApi.createComment({comment:'111'})
        }
        async getLabels(){
            let labels = await this.githubApi.labelsList4Repository();
            console.log('labels---->',labels);
        }
        async getMilestones(){
            let milestones = await this.githubApi.labelsMilestones4Repository();
            console.log('milestones---->',milestones);
        }
        async getIssuesList(){
            let issuesList = await this.githubApi.getIssuesList({milestone:'',labels:''});
            console.log('issuesList---->',issuesList);
        }
    }
</script>

<style scoped>

</style>