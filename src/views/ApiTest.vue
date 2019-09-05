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
        <button @click="getBlogMasterInfo()">getBlogMasterInfo</button>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    // @ts-ignore
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import GithubApi from '@/util/GithubApi.ts'; // @ is an alias to /src

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class ApiTest extends Vue {
        created(){
        }
        mounted(){
        }
        getUserInfo(){
        }
        toLogin(){
            this.$githubApi.toLogin();
        }
        async getToken(){
            await this.$githubApi.getToken({code:'09884ecc7994a842b01e'});
        }
        async createComment(){
            let newCommentInfo = await this.$githubApi.createComment({comment:'111'})
        }
        async getLabels(){
            let labels = await this.$githubApi.labelsList4Repository();
            console.log('labels---->',labels);
        }
        async getMilestones(){
            let milestones = await this.$githubApi.milestonesList4Repository();
            console.log('milestones---->',milestones);
        }
        async getIssuesList(){
            let issuesList = await this.$githubApi.getIssuesList({milestone:'',labels:''});
            console.log('issuesList---->',issuesList);
        }
        async getBlogMasterInfo(){
            let blogMasterInfo = await this.$githubApi.getBloggerInfo();
            console.log('blogMasterInfo------>',blogMasterInfo);
        }
    }
</script>

<style scoped>

</style>
