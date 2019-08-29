<template>
  <div class="about">
    <h1>This is an about page4 {{$store.state.sayHello}}</h1>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
    },
  })
  export default class Home extends Vue {

  }
</script>
