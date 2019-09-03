<template>
<div style="height: 100%;overflow: hidden">
  <div class="inline-block" style="background-color: #2ab1f0;width: 200px;height: 100vh;overflow: auto">
    <div v-for="item in 100">{{item}}</div>
  </div>

</div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
    },
  })
  export default class test extends Vue {

  }
</script>
<style scoped>

  span {
    font-size: 2em;
  }

  #container{
    display: grid;
    grid-auto-flow: row dense;
    grid-template-rows: repeat(16,46px);
    grid-template-columns: repeat(1,100%);

    /*grid-template-columns: [c1] 150px [c2] 150px [c3] 150px [c4];*/
    /*grid-template-rows: [r1] 150px [r2] 150px [r3] 150px [r4];*/
    /*grid-gap: 5px 5px;*/
    /*grid-template-areas:  "header header header"*/
    /*                      "main main sidebar"*/
    /*                      "footer footer footer";*/
    /*justify-items: stretch;*/
    /*align-items: stretch;*/


    /*justify-content: space-around ;*/
    /*align-content: start | end | center | stretch | space-around | space-between | space-evenly;*/
  }

  .item {
    font-size: 2em;
    text-align: center;
    border: 1px solid #e5e4e9;
  }

  .item-1 {
    background-color: #ef342a;
    grid-row: span 3;
    /*grid-column: 1 / 3;*/
    /*grid-row: 1 / 3;*/
  }

  .item-2 {
    background-color: #f68f26;
  }

  .item-3 {
    background-color: #4ba946;
  }

  .item-4 {
    background-color: #0376c2;
  }

  .item-5 {
    background-color: #c077af;
  }

  .item-6 {
    background-color: #f8d29d;
  }

  .item-7 {
    background-color: #b5a87f;
  }

  .item-8 {
    background-color: #d0e4a9;

  }

  .item-9 {
    background-color: #4dc7ec;

  }
</style>
