<template>
<div style="">

</div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
    },
  })
  export default class test extends Vue {
      created(){
        // let gitA = `<a href="https://camo.githubusercontent.com/bf3564e3787f5a22e9f705e45a55c55c9efadb06/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30342e6a7067" target="_blank" rel="nofollow"><img src="https://camo.githubusercontent.com/bf3564e3787f5a22e9f705e45a55c55c9efadb06/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30342e6a7067" alt="photo_01_04" data-canonical-src="http://qiniu.kajie88.com/photo_01_04.jpg" style="max-width:100%;"></a>`;

        let gitA = '<p><a href="https://camo.githubusercontent.com/369a0593551c1c5dcc5e02db8ff112fe6d75ec77/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f31302e6a7067" target="_blank" rel="nofollow"><img src="https://camo.githubusercontent.com/369a0593551c1c5dcc5e02db8ff112fe6d75ec77/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f31302e6a7067" alt="photo_01_10" data-canonical-src="http://qiniu.kajie88.com/photo_01_10.jpg" style="max-width:100%;"></a>\n' +
                '<a href="https://camo.githubusercontent.com/bf3564e3787f5a22e9f705e45a55c55c9efadb06/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30342e6a7067" target="_blank" rel="nofollow"><img src="https://camo.githubusercontent.com/bf3564e3787f5a22e9f705e45a55c55c9efadb06/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30342e6a7067" alt="photo_01_04" data-canonical-src="http://qiniu.kajie88.com/photo_01_04.jpg" style="max-width:100%;"></a>\n' +
                '<a href="https://camo.githubusercontent.com/4d4cfb5fcea7cfe2b3a1b09baa8ae244d791d9fd/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30392e6a7067" target="_blank" rel="nofollow"><img src="https://camo.githubusercontent.com/4d4cfb5fcea7cfe2b3a1b09baa8ae244d791d9fd/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30392e6a7067" alt="photo_01_09" data-canonical-src="http://qiniu.kajie88.com/photo_01_09.jpg" style="max-width:100%;"></a>\n' +
                '<a href="https://camo.githubusercontent.com/694fce7876f895f630279ea1c6ad3ff8ed18e4e9/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30372e6a7067" target="_blank" rel="nofollow"><img src="https://camo.githubusercontent.com/694fce7876f895f630279ea1c6ad3ff8ed18e4e9/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30372e6a7067" alt="photo_01_07" data-canonical-src="http://qiniu.kajie88.com/photo_01_07.jpg" style="max-width:100%;"></a>\n' +
                '<a href="https://camo.githubusercontent.com/752d9ef166b8bab6548578b09c186a3f5c11205c/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30352e6a7067" target="_blank" rel="nofollow"><img src="https://camo.githubusercontent.com/752d9ef166b8bab6548578b09c186a3f5c11205c/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30352e6a7067" alt="photo_01_05" data-canonical-src="http://qiniu.kajie88.com/photo_01_05.jpg" style="max-width:100%;"></a>\n' +
                '<a href="https://camo.githubusercontent.com/bda31c0d0259821b0056700d26f0aced0c12f02c/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30382e6a7067" target="_blank" rel="nofollow"><img src="https://camo.githubusercontent.com/bda31c0d0259821b0056700d26f0aced0c12f02c/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30382e6a7067" alt="photo_01_08" data-canonical-src="http://qiniu.kajie88.com/photo_01_08.jpg" style="max-width:100%;"></a>\n' +
                '<a href="https://camo.githubusercontent.com/02437fdb6723ae26c05d60583f9969093358494a/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30322e6a7067" target="_blank" rel="nofollow"><img src="https://camo.githubusercontent.com/02437fdb6723ae26c05d60583f9969093358494a/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30322e6a7067" alt="photo_01_02" data-canonical-src="http://qiniu.kajie88.com/photo_01_02.jpg" style="max-width:100%;"></a>\n' +
                '<a href="https://camo.githubusercontent.com/b1a38c225a70e1b169507bb2dde5056074b74c49/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30312e6a7067" target="_blank" rel="nofollow"><img src="https://camo.githubusercontent.com/b1a38c225a70e1b169507bb2dde5056074b74c49/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30312e6a7067" alt="photo_01_01" data-canonical-src="http://qiniu.kajie88.com/photo_01_01.jpg" style="max-width:100%;"></a>\n' +
                '<a href="https://camo.githubusercontent.com/8aade772480f36dfbbae3ec5de3bfe662a7bc03e/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30362e6a7067" target="_blank" rel="nofollow"><img src="https://camo.githubusercontent.com/8aade772480f36dfbbae3ec5de3bfe662a7bc03e/687474703a2f2f71696e69752e6b616a696538382e636f6d2f70686f746f5f30315f30362e6a7067" alt="photo_01_06" data-canonical-src="http://qiniu.kajie88.com/photo_01_06.jpg" style="max-width:100%;"></a></p>\n';

        let gitReg = /<a href="([^"]*).* src="([^"]*).* alt="([^"]*)".* data-canonical-src="([^"]*)".*<\/a>/gi;
        console.log(gitReg.exec(gitA));
        gitA = gitA.replace(gitReg,`<a href="$4" target="_blank" rel="nofollow"><img src="$4" alt="$3" data-canonical-src="$4" style="max-width:100%;"></a>`)
        console.log(gitA)
        // 训练1: 请通过正则表达式，把 () => 1+1 修改为 function () { return 1+1 }
        // let str1 = `() => 1+1`;
        // let reg1 = /(\(\))\s=>\s(1.1)/
        // console.log(reg1.exec(str1));
        // str1 = str1.replace(reg1,'function $1 { return $2 }')
        // console.log('s1 result = ',str1)
      }
  }
</script>
<style scoped>

</style>
