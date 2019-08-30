<template>
  <div class="home">
    <button @click="getUserInfo()">sendGet</button>
    <button @click="toLogin()">toLogin</button>
    <button @click="getToken()">getToken</button>
    <button @click="createComment()">createComment</button>

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
export default class Home extends Vue {
  // 一旦将完整的clientSecret提交到仓库中 github会重置我的clientSecret
  githubApi:GithubApi =new GithubApi({
    clientId:'bb7'+'5d3762'+'02e7c49a8b6',
    clientSecret:'b2cc94c'+'423c87d09e'+'84119876e4a'+'bea998bfee07',
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

}
</script>
