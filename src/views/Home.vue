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

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  getUserInfo(){
    //@ts-ignore
    this.$get('https://api.github.com/user?token_access=f321335d3b6d5b4adac0cef8f273a74f8613e2ca');
  }
  toLogin(){
    window.open('https://github.com/login/oauth/authorize?client_id=7790a8ea876aad00d848')
    // c70586be38bfc56e265f
  }
  async getToken(){
    //@ts-ignore
    let result = await this.$get('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',{code:'f80f53a6970d1c8f6088',client_id:'7790a8ea876aad00d848',client_secret:'00466aedf6ff40c839b2ea435686230eda4895ad'});
    let data = result.data;
    function test(href:any){
      let params = href;
      let paramArr = params.split('&');
      let res:any = {};
      for(let i = 0;i<paramArr.length;i++){
        let str = paramArr[i].split('=');
        res[str[0]]=str[1];
      }
      console.log(res)
    }
    test(data);
    // cd22d6313c9e3d2bf8cc039f614d911522643e91
  }
  createComment(){
    //@ts-ignore
    this.$post('https://api.github.com/repos/kajiecy/kajiecy.github.io/issues/1/comments',{body:'me too'});
  }

}
</script>
