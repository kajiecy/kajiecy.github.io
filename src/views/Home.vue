<template>
    <div class="home">
        <div class="home-background-div"></div>
        <div class="home-body">
            <div class="left-info">
                <div class="user-avatar">
                    <img :src="bloggerInfo.avatar_url" width="150" height="150" alt="">
                </div>
                <div class="blog-count">
                    <div>
                        <span>文章</span><br>
                        10
                    </div>
                    <div>
                        <span>标签</span><br>
                        10
                    </div>
                    <div>
                        <span>分类</span><br>
                        10
                    </div>
                </div>
                <ul class="nexmoe-list mdui-list" mdui-collapse="{accordion: true}"><a
                        class="active nexmoe-list-item mdui-list-item mdui-ripple" href="/" title="回到首页"><i
                        class="mdui-list-item-icon nexmoefont icon-home"></i>
                    <div class="mdui-list-item-content">回到首页</div>
                </a><a class="nexmoe-list-item mdui-list-item mdui-ripple" href="/about.html" title="关于博客"><i
                        class="mdui-list-item-icon nexmoefont icon-info-circle"></i>
                    <div class="mdui-list-item-content">关于博客</div>
                </a><a class="nexmoe-list-item mdui-list-item mdui-ripple" href="/PY.html" title="我的朋友"><i
                        class="mdui-list-item-icon nexmoefont icon-unorderedlist"></i>
                    <div class="mdui-list-item-content">我的朋友</div>
                </a></ul>
            </div>
            <div class="grid-body" style="height: 2000px">
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
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class Home extends Vue {
        bloggerInfo: any = {};

        created() {
        }

        mounted() {
            (async () => {
                let bloggerInfo = await this.$githubApi.getBloggerInfo();
                this.bloggerInfo = bloggerInfo;
            })()
        }

    }
</script>
<style lang="scss">
    .home {
        .home-background-div {
            height: 100%;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: -1;

            background: url('http://qiniu.kajie88.com/e6f4b13bb6cd1d6a109e1ae85120f33f.jpg');
            background-size: cover;
            opacity: 0.2;
            filter: blur(30px);
        }

        .home-body {
            width: 1200px;
            margin: 0 auto;

            .left-info {
                text-align: center;
                width: 240px;
                display: inline-block;

                .user-avatar {
                    margin: 45px;
                    z-index: 4;
                    position: relative;
                    font-size: 0;
                    width: calc(100% - 90px);
                    overflow: hidden;
                    border-radius: 100%;
                    box-shadow: 0 0.3rem 2rem rgba(161, 177, 204, .6);
                }

                .blog-count {
                    div {
                        display: inline-block;
                        color: #909399;
                        text-align: center;

                        span {
                            display: inline-block;
                            color: #333333;
                            padding: 0 16px;
                        }
                    }
                }
            }

            .grid-body {
                width: 960px;
                display: inline-grid;
                grid-template-columns: repeat(12, 1fr);
                grid-gap: 16px 32px;
            }
        }

    }
</style>
