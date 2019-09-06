<template>
    <div class="home">
<!--        <div style="position:absolute" >-->
<!--            <button v-if="!token" style="position:absolute" @click="setToken">setToken</button>-->
<!--            <span v-else>{{token}}</span>-->
<!--        </div>-->


        <div class="home-background-div"></div>
        <div class="home-body">
            <div class="left-info">
                <div class="left-info-fix">
                    <div class="left-info-body">
                        <div class="user-avatar">
                            <div class="img-div">
                                <img :src="bloggerInfo.avatar_url" width="150" height="150" alt="">
                            </div>
                        </div>
                        <div class="blog-count">
                            <div>
                                <span>文章</span><br>
                                {{$store.state.repoInfo.open_issues_count?$store.state.repoInfo.open_issues_count:0}}
                            </div>
                            <div>
                                <span>标签</span><br>
                                {{$store.state.labelsList.length}}
                            </div>
                            <div>
                                <span>分类</span><br>
                                {{$store.state.milestonesList.length}}
                            </div>
                        </div>
                        <span class="blog-function-list-item active" @click="$router.push('/')" title="我的首页">
                            <div class="list-item-content"><i class="item-icon iconfont icon-shouye"></i>我的首页</div>
                        </span>
                        <span class="blog-function-list-item " @click="$router.push({name:'test'})" href="javascript:void(0)" title="关于博客">
                            <div class="list-item-content"><i class="item-icon iconfont icon-about"></i>关于博客</div>
                        </span>

                        <div class="blog-widget-wrap">
                            <h3 class="blog-widget-title">社交按钮</h3>
                            <div class="blog-widget social-widget">
                                <!-- github -->
                                <a class="blog-widget-item" href="https://github.com/kajiecy/" target="_blank"
                                   style="color:#191717;background-color:rgba(25,23,23,.1)"
                                   rel="external nofollow noopener noreferrer" title="github">
                                    <i class="iconfont icon-github"></i>
                                </a>
                                <!--QQ-->
                                <a class="blog-widget-item"
                                   href="http://wpa.qq.com/msgrd?v=3&amp;uin=851416347&amp;site=qq&amp;menu=yes"
                                   target="_blank" style="color:#f9ae08;background-color:rgba(249,174,8,.1)"
                                   rel="external nofollow noopener noreferrer" title="Click me!">
                                    <i class="iconfont icon-tubiao215"></i>
                                </a>
                                <!--微信-->
                                <a class="blog-widget-item" href="JavaScript:void(0)" target="_blank"
                                   style="color:#7FD53E;background-color:rgba(14,71,161,.1)"
                                   rel="external nofollow noopener noreferrer" title="wechat:cy851416347">
                                    <i class="iconfont icon-weixin"></i>
                                </a>
                                <!--简书-->
                                <a class="blog-widget-item" href="https://www.jianshu.com/u/5636d2922139"
                                   target="_blank" style="color:#ffffff;background-color:#EA6F5A"
                                   rel="external nofollow noopener noreferrer" title="简书">
                                    <i class="iconfont jianshu">简</i>
                                </a>
                                <!--掘金-->
                                <a class="blog-widget-item" href="https://juejin.im/user/5b8f2639e51d4538c4120c14"
                                   target="_blank" style="color:#006CFF;background-color:rgba(14,71,161,.1)"
                                   rel="external nofollow noopener noreferrer" title="掘金">
                                    <i class="iconfont icon-juejin"></i>
                                </a>
                                <!--战网-->
                                <a class="blog-widget-item" href="JavaScript:void(0)" target="_blank"
                                   style="color:#3c57a4;background-color:rgba(60,87,164,.1)"
                                   rel="external nofollow noopener noreferrer" title="卡杰#12345">
                                    <i class="iconfont icon-battle-net"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="right-info-bottom">
                        <div class="blog-widget-wrap blog-widget-tags">
                            <h3 class="blog-widget-title">标签云</h3>
                            <div class="blog-widget tag-widget">
                                <span class="item" v-for="(item,index) in $store.state.labelsList" :style="{backgroundColor: '#'+item.color}" @click="$router.push({name:'blog_list',query:{tag:item.name}})">
                                    # {{item.name}}
                                </span>
                            </div>
                        </div>
                        <div class="blog-widget-wrap blog-widget-tags">
                            <h3 class="blog-widget-title">文章分类</h3>
                            <div class="blog-widget type-widget">
                                <div class="item" v-for="(item,index) in $store.state.milestonesList"  @click="$router.push({name:'blog_list',query:{milestone:item.number}})">
                                    {{item.title}} <span>{{item.open_issues}}</span>
                                </div>
                            </div>
                        </div>
                        <div style="text-align: right;color: #9ca2a8;" class="mb20">
                            © 2019 卡杰(kajiecy) Powered by <a class="blog-widget-item" href="https://github.com/kajiecy/"
                                                             target="_blank" style="color:#258EFB;text-decoration: none"
                                                             title="github">Myself</a>

                        </div>
                    </div>
                </div>
            </div>
            <div class="grid-body">
                <div class="home-header ">
                    <div class="dis_table wd100">
                        <div class="dis_table_cell">
                            <i class="iconfont icon-caidan"></i>
                        </div>
                        <div class="dis_table_cell textcenter" style="width: 60px">
                            <img style="border-radius: 50%" :src="bloggerInfo.avatar_url" width="40" height="40" alt="">
                        </div>
                    </div>
                </div>
                <router-view :key="routeKey"></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue ,Model,Watch,Inject} from 'vue-property-decorator';

    Component.registerHooks([
        'beforeRouteEnter',
        'beforeRouteLeave',
        'beforeRouteUpdate',
    ])

    @Component({
        components: {},
    })
    export default class Home extends Vue {
        bloggerInfo: any = {};
        routeKey:number = Math.random();
        created() {
        }
        mounted() {
            this.$githubApi.getBloggerInfo().then((bloggerInfo)=>this.bloggerInfo = bloggerInfo);
            // @ts-ignore
            this.$githubApi.labelsList4Repository().then((labelsList)=>this.$store.commit('setLabelsList',labelsList.filter((item)=>{return item.name.indexOf(':img')===-1})));
            this.$githubApi.milestonesList4Repository().then((milestonesList)=>this.$store.commit('setMilestonesList',milestonesList))
            this.$githubApi.getRepoInfo().then((repoInfo)=>{this.$store.commit('setRepoInfo',repoInfo)})
        }
        @Watch("$route", {deep: false})
        watchTopStatus(newValue: any, oldValue: any) {
            this.routeKey = Math.random();
        }
        setToken(){
            let token = window.prompt("token","input token!")
            if(token){
                localStorage.setItem('token_access',<string>token);
                localStorage.setItem('login_avatar','https://avatars1.githubusercontent.com/u/28913648?v=4');
                window.history.go(0);
            }
        }
        get token(){
            return localStorage.getItem('token_access');
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
            display: grid;
            grid-template-columns: 240px 960px;
            transition: all 1000ms;

            .left-info {
                display: inline-block;
                width: 240px;

                .left-info-fix {
                    position: fixed;
                    height: 100vh;
                    overflow-y: auto;

                    &::-webkit-scrollbar {
                        display: none;
                    }

                    .left-info-body {
                        width: 240px;

                        padding: 0 20px;


                        display: grid;
                        grid-template-rows: repeat(7, 48px) repeat(2, 42px);
                        grid-template-columns: repeat(1, 100%);
                        grid-gap: 16px 0px;
                        padding-top: 20px;
                        /*左侧头像样式*/
                        .user-avatar {
                            grid-row: span 3;
                            justify-self: center;
                            align-self: center;

                            .img-div {
                                height: 150px;
                                width: 150px;
                                z-index: 4;
                                position: relative;
                                font-size: 0;
                                overflow: hidden;
                                border-radius: 100%;
                                box-shadow: 0 0.3rem 2rem rgba(161, 177, 204, .6);
                            }
                        }

                        /*博客统计数据样式*/
                        .blog-count {
                            justify-self: center;
                            align-self: center;

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

                        .blog-function-list-item {
                            text-decoration: none;
                            color: #9ca2a8;
                            text-align: center;
                            cursor: pointer;
                            .list-item-content {
                                padding-top: 14px;
                                padding-bottom: 14px;
                                font-size: 16px;
                                font-weight: 400;
                                line-height: 20px;

                                border-radius: 10px;

                                .item-icon {
                                    display: inline-block;
                                    margin-right: 15px;
                                    font-size: 20px;
                                }
                            }

                            .list-item-content:hover {
                                background: #D1D1D1;
                            }

                            &.active .list-item-content {
                                color: #ffffff;
                                opacity: .9;
                                background: #258EFB;
                                box-shadow: 0 2px 12px #258EFB;
                            }
                        }
                    }
                    .right-info-bottom {
                        width: 240px;
                        padding: 0 20px;

                        .blog-widget-wrap {
                            margin: 16px 0;
                        }

                        .tag-widget {
                            padding: 10px 10px;

                            .item {
                                background-color: rgba(56, 150, 248, .15);
                                color: rgba(56, 150, 248, .8);
                                display: inline-block;
                                padding: 3px 5px;
                                margin: 6px 4px 6px 4px;
                                font-size: 12px;
                                border-radius: 4px;
                                color: white;
                            }
                        }

                        .type-widget {
                            .item {

                                padding: 10px 10px;
                                border-bottom: 1px solid rgba(161, 177, 204, .2);

                                &:last-child {
                                    border-bottom: 0;
                                }

                                span {
                                    padding: 5px;
                                    display: inline-block;
                                    background-color: rgba(56, 150, 248, .9);
                                    color: white;
                                    float: right;
                                    width: 25px;
                                    height: 25px;
                                    text-align: center;
                                    border-radius: 50px;
                                    position: relative;
                                    top: -3px;
                                }
                            }
                        }
                    }

                    /*社交按钮样式*/
                    .blog-widget-wrap {
                        grid-row: span 3;
                        box-shadow: 0 0 1rem rgba(161, 177, 204, .4);
                        background-color: #fff;
                        border-radius: 10px;
                        overflow: hidden;
                        white-space: normal;

                        h3 {
                            text-align: left;
                            font-size: 1.1em;
                            font-weight: 400;
                            padding: 16px 12px 10px;
                            border-bottom: 1px solid #eee;
                            margin: 0;
                            height: 45px;
                        }

                        .item {
                            cursor: pointer;
                        }

                        .social-widget {
                            height: calc(100% - 45px);
                            display: grid;
                            grid-template-columns: repeat(4, 36px);
                            grid-template-rows: repeat(2, 36px);
                            place-content: space-evenly;

                            .blog-widget-item {
                                display: inline-block;
                                /*justify-self: center;*/
                                /*align-self: center;*/
                                text-decoration: none;
                                border-radius: 50%;
                                text-align: center;

                                i {
                                    font-size: 1.2em;
                                    position: relative;
                                    top: 9px;
                                }

                                .jianshu {
                                    font-size: 1.1em;
                                    top: 7px;
                                }

                                .hint-title {
                                    color: white;
                                    background-color: rgba(0, 0, 0, 0.5);
                                    padding: 2px 5px;
                                    border-radius: 4px;
                                }
                            }
                        }

                        &.blog-widget-tags {
                            grid-row: span 1;
                        }

                    }
                }


            }
            .home-header{
                display: none;

                width: 100%;
                background-color: #ffffff;
                padding: 10px;
                .dis_table_cell:first-child{
                    text-align: left;
                    padding-left: 10px;
                    i{
                        cursor: pointer;
                        font-size: 18px;
                    }
                }
            }
            /*.grid-body {*/
            /*    flex: 0 0 960px;*/
            /*    display: inline-grid;*/
            /*    grid-template-columns: repeat(12, 1fr);*/
            /*    grid-gap: 16px 32px;*/
            /*}*/
        }
        @media (max-width: 1200px) {
            .home-body{
                width: 100%;
                grid-template-columns: 240px 1fr
            }
        }
        @media (max-width: 1000px) {
            .home-body{
                width: 100%;
                grid-template-columns: 0 1fr;
                .left-info{
                    .left-info-fix{
                        /*width: 0px;*/
                        background-color: #2ab1f0;
                        z-index: 2;

                    }
                }
                .home-header{
                    display: block;
                }
            }
        }
    }


</style>
