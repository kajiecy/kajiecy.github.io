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
    this.$get('https://api.github.com/user?token_access=43e74966374ada1fe3b4659fd80d7dd5ddd74420');
  }
  toLogin(){
    // window.open('https://github.com/login/oauth/authorize?client_id=7790a8ea876aad00d848&scope=public_repo&redirect_uri=http://192.168.16.139:8080/')
    //@ts-ignore
    window.open('https://github.com/login/oauth/authorize?scope=public_repo&redirect_uri=https://www.kajie88.com/&client_id=7790a8ea876aad00d848&client_secret=00466aedf6ff40c839b2ea435686230eda4895ad');

  }
  async getToken(){
    //@ts-ignore
    // let result = await this.$get('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',{code:'c30e48be8765262f964c',client_id:'b08ed25e52c57993e69c',client_secret:'1cb9545488f0380904b87350e7c5a270ae03bab7'});
    let result = await this.$get('https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token',{code:'12277f56e1fc1aa9d074',client_id:'7790a8ea876aad00d848',client_secret:'00466aedf6ff40c839b2ea435686230eda4895ad'});
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
