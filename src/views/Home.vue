<template>
  <div class="home">
    <div class="home-background-div"></div>
    <div class="home-body">
      <div class="left-info">
        <div class="user-avatar"></div>
      </div>
      <div class="grid-body">
        <div style="height: 60px">1</div>
        <div style="height: 60px">2</div>
        <div style="height: 60px">3</div>
        <div style="height: 60px">4</div>
        <div style="height: 60px">5</div>
        <div style="height: 60px">6</div>
        <div style="height: 60px">1</div>
        <div style="height: 60px">2</div>
        <div style="height: 60px">3</div>
        <div style="height: 60px">4</div>
        <div style="height: 60px">5</div>
        <div style="height: 60px">6</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Home extends Vue {
  userInfo:any;
  created(){
  }
  mounted(){
    (async ()=>{
      let masterInfo = await this.$githubApi.getBlogMasterInfo();
    })()
  }

}
</script>
<style lang="scss">
  .home {
    .home-background-div{
      height: 100%;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;

      background:url('http://qiniu.kajie88.com/e6f4b13bb6cd1d6a109e1ae85120f33f.jpg') ;
      background-size: cover;
      opacity: 0.2;
      filter:blur(30px);
    }
    .home-body{
      width: 1200px;
      margin: 0 auto;
      .left-info{
        width: 240px;
        display: inline-block;
      }
      .grid-body{
        width: 960px;
        display: inline-grid;
        grid-template-columns: repeat(12,1fr);
        grid-gap: 16px 32px;
      }
    }

  }
</style>
