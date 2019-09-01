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
                <ul class="blog-function-list" >
                    <a class="blog-function-list-item active" href="javascript:void(0)" title="我的首页">
                        <div class="list-item-content"><i class="item-icon iconfont icon-shouye"></i>我的首页</div>
                    </a>
                    <a class="blog-function-list-item " href="javascript:void(0)" title="关于博客">
                        <div class="list-item-content"><i class="item-icon iconfont icon-about"></i>关于博客</div>
                    </a>
                </ul>
            </div>
            <div class="grid-body" style="height: 2000px">
                <div style="height: 60px">1</div>

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
            display: flex;
            .left-info {
                text-align: center;
                display: inline-block;
                flex: 0 0 240px;
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
                .blog-function-list{
                    padding:8px 20px;
                    margin: 10px 0 0 0;
                    list-style: none;
                    background-color: transparent;
                    .blog-function-list-item{
                        text-decoration: none;
                        padding: 0 36px;
                        color: #9ca2a8;
                        text-align: center;
                        margin-bottom: 10px;

                        .list-item-content{
                            padding-top: 14px;
                            padding-bottom: 14px;
                            font-size: 16px;
                            font-weight: 400;
                            line-height: 20px;
                            transition: all .5s;

                            border-radius: 10px;
                            .item-icon{
                                display: inline-block;
                                margin-right: 15px;
                                font-size: 20px;
                            }
                        }
                        .list-item-content:hover{
                            background: #D1D1D1;
                        }
                        &.active .list-item-content{
                            color: #ffffff;
                            opacity: .9;
                            background: #ff4e6a;
                            box-shadow: 0 2px 12px #ff4e6a;
                        }
                    }
                }
            }

            .grid-body {
                flex: 0 0 960px;
                display: inline-grid;
                grid-template-columns: repeat(12, 1fr);
                grid-gap: 16px 32px;
            }
        }

    }
</style>
