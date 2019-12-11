<template>
    <div class="skeleton">
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class test extends Vue {
        test:boolean = false;
        created() {
            let content = '';
        }
    }
</script>
<style lang="scss" scoped>
    .skeleton{
        background-color: #2ab1f0;
        width: 300px;
        height: 200px;
        &:empty::after{
            content: '';
            display: block;
            width: 300px;
            height: 200px;
            background-image:linear-gradient(90deg, rgba(211, 211, 211, 1) 0, rgba(211, 211, 211, 0.8) 50%, rgba(211, 211, 211, 1) 100%);
            background-size:250px 50px;
            background-repeat: no-repeat;
            background-position: 20px 20px;
            animation: loading 1.5s infinite;
        }
    }
    @keyframes loading {
        to {
            background-position:0 0;
        }
    }
</style>
