<template>
  <div class="about">
    <h1>LoginCallBack.vue {{code}}</h1>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
    },
  })
  export default class LoginCallBack extends Vue {
    code:String|any = '';
    mounted(){
      console.log(`print code `,this.$route);
      this.code = this.$route.query.code;
    }
  }
</script>
