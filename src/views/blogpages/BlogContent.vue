<template>
    <div class="blog-content">
        <div class="blog-content-body">
            <div class="img-div">
                <img :src="getBlogImg(blogContent)" width="100%" height="100%">
                <div class="title-div">
                    {{blogContent.title}}
                </div>
            </div>
            <div class="tag-div">
                <span class="tag-item" style="background-color: #258EFB"><i class="iconfont icon-riqi"></i>{{formatDate(blogContent.created_at)}}</span>
                <span class="tag-item" style="background-color: #E6A23C"><i class="iconfont icon-riqi"></i>{{getCharCount(blogContent.body)}}字</span>
                <span class="tag-item" style="background-color: #FF4E6A"><i class="iconfont icon-shijian"></i>大概 {{calcReadTime(blogContent.body)}} 分钟</span>
                <span class="tag-item blog-labels"
                      v-for="(cItem) in blogContent.labels.filter((ccItem)=>ccItem.name.indexOf(':img')===-1)"
                      @click="$router.push({name:'blog_list',query:{tag:cItem.name}})"
                      :style="{backgroundColor:'#'+cItem.color}">
                        <i class="iconfont icon-biaoqian"></i>{{cItem.name}}
                    </span>
                <span class="tag-item" style="background-color:#67C23A;cursor: pointer" @click="$router.push({name:'blog_list',query:{milestone:blogContent.milestone.number}})"><i class="iconfont icon-leimupinleifenleileibie"></i>{{blogContent.milestone.title}}</span>
            </div>
            <article class="markdown-body" v-html="markDownBody"></article>
            <div>
                accessToken:{{loginInfo.accessToken}}<br>
                loginAvatar:{{loginInfo.loginAvatar}}

                <span v-if="!loginInfo.accessToken" style="display: inline-block;padding: 10px;background-color: #2ab1f0;cursor: pointer;color: white" @click="toLogin">登录</span>
                <span v-else style="display: inline-block;padding: 10px;background-color: #2ab1f0;cursor: pointer;color: white" @click="loginOut">注销</span>
            </div>
            <div class="blog-comment">
                <div class="title">
                    <span>
                        评论 ({{blogContent.comments}})
                    </span>
                </div>
                <div class="body">
                    <div class="item dis_table wd100" v-for="(item) in commentList">
                        <div class="dis_table_cell comment_user_avatar" style="width: 44px;vertical-align: top">
                            <img width="44" height="44" :src="item.user.avatar_url" alt="">
                        </div>
                        <div class="table-right dis_table_cell textleft" style="vertical-align: top">
                            <div>
                                <a class="comment_user_name" :href="'https://github.com/'+item.user.login" target="_blank">{{item.user.login}}</a>
                                <span class="comment_time">{{formatDate(item.created_at,1)}}</span>
                            </div>
                            <div class="comment_content">
                                {{item.body}}
                            </div>
                        </div>
                    </div>
                    <page-component :pageNum="pageNum" :pageSize="pageSize" :total="blogContent.comments" @changePage="changePage"></page-component>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component,Prop,Vue,Model,Watch,Inject} from 'vue-property-decorator';
    // @ts-ignore
    import PageComponent from '@/components/PageComponent.vue';
    import GithubConfig from '@/util/GithubConfig';
    @Component({
        components: {
            PageComponent
        },
    })
    export default class BlogList extends Vue {
        blogContent:any = {labels:[],created_at:'',body:'',milestone:{}};
        markDownBody:string = '';
        commentList:any = [];
        pageNum:number = 1;
        pageSize:number = 10;

        created(){
            console.log('window.location.href=============》',window.location.href)
            if(window.location.href.indexOf('?code=')!==-1&&!this.$route.query.code){
                console.log(`进入1重新转到2`)
                this.$router.push({name:'api_test',query:{...this.$route.query,code:window.location.href.substring(window.location.href.indexOf('?code=')+6,window.location.href.indexOf('#'))}})
            }else {
                history.pushState({code:'1'},'my_blog','#/blog_content?issueNumber='+this.$route.query.issueNumber);
                let code:string = <string>this.$route.query.code;
                if(code){
                    this.$githubApi.getToken({code:code}).then((res)=>{
                        console.log('getToken返回的结果',res)
                        // @ts-ignore
                        this.$route.query.code = null;
                        this.initData();
                    });
                }else {
                    this.initData();
                }
            }
        }
        toLogin(){
            // console.log(window.location.href)
            this.$githubApi.toLogin(window.location.href);
        }
        loginOut(){
            localStorage.setItem(GithubConfig.LOCALSTORAGE_NAME,'');
        }
        get loginInfo(){
            return {accessToken:localStorage.getItem(GithubConfig.LOCALSTORAGE_NAME),loginAvatar:localStorage.getItem(GithubConfig.LOCALSTORAGE_LOGIN_AVATAR)}
        }
        async initData(){
            (async()=>{
                this.blogContent = await this.$githubApi.getIssuesContent({issueNumber:this.$route.query.issueNumber});
                this.markDownBody = <string>await this.$githubApi.getMdContent({text:this.blogContent.body});
                this.markDownBody = this.markDownBody.replace(/<a href="([^"]*).* src="([^"]*).* alt="([^"]*)".* data-canonical-src="([^"]*)".*<\/a>/gi,`<a href="$4" target="_blank" rel="nofollow"><img src="$4" alt="$3" data-canonical-src="$4" style="max-width:100%;"></a>`)
            })();
            // this.$githubApi.getLoginUserInfo();
            this.getCommentList();
        }
        async getCommentList(){
            this.commentList = await this.$githubApi.getCommentList4Issues({issueNumber:this.$route.query.issueNumber,page:this.pageNum,perPage:this.pageSize});
        }
        getBlogImg(blogItem:any){
            let imgUrl = '';
            if(blogItem.id){
                if(blogItem.labels&&blogItem.labels.length){
                    // 取最后一个有图片的标签
                    blogItem.labels.forEach((item:any)=>{
                        if(item.name.indexOf(':img')===0){
                            imgUrl = this.$store.state.qiniuDomainName +item.name.substring(5);
                        }
                    })
                }
                if(!imgUrl&&blogItem.milestone){
                    // 取最后一个有图片的分类
                    imgUrl = blogItem.milestone.description;
                }
                // 如果标签中的图片
                // 分类中的图片
                // 默认图片
                if(!imgUrl){
                    imgUrl = this.$store.state.defaultImg;
                }
            }
            return imgUrl;
        }
        getCharCount(text:string){
            if(text){
                let reg = /[\u4e00-\u9fa5]/g;
                let reg2 = /[a-zA-Z]/g;
                let count1 = text.match(reg)?text.match(reg)!.length:0;
                // let count2 = text.match(reg2)?text.match(reg2)!.length:0
                // return (count1+count2/2).toFixed(0);
                return (count1).toFixed(0);
            }else {
                return '';
            }

        }
        calcReadTime(text:string){
            if(text){
                let reg = /[\u4e00-\u9fa5]/g;
                let reg2 = /[a-zA-Z]/g;
                let count1 = text.match(reg)?text.match(reg)!.length:0;
                // let count2 = text.match(reg2)?text.match(reg2)!.length:0
                // return ((count1+count2) / 500).toFixed(0);
                return Math.ceil((count1) / 500);
            }else {
                return 0;
            }
        }
        changePage(pageNum:number){
            console.log('changePage_____>')
            this.pageNum = pageNum;
            this.getCommentList();
        }
    }
</script>
<style lang="scss" scoped>
    .blog-content {
        background-color: white;
        box-shadow: 0 0 1rem rgba(161, 177, 204, .4);
        padding: 20px;
        min-height: 100vh;

        .blog-content-body {
            margin-bottom: 20px;
            /*box-shadow: 0 0 1rem rgba(161, 177, 204, .5);*/
            /*border-radius: 10px;*/
            overflow: hidden;

            .img-div {
                height: 500px;
                border-radius: 10px;
                /*border-top-right-radius: 10px;*/
                /*border-top-left-radius: 10px;*/
                overflow: hidden;
                cursor: pointer;
                user-select: none;
            }

            .title-div {
                position: relative;
                top: -55px;
                line-height: 42px;
                left: 0;
                font-size: 32px;
                color: white;
                padding: 5px 10px;
                background: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4));
                user-select: auto;
            }
            .tag-div{
                /*padding: 5px 15px 10px ;*/
                padding: 5px 0 10px ;

                .tag-item {
                    display: inline-block;
                    padding: 5px 10px 5px 10px;
                    color: white;
                    background-color: #eeeeee;
                    margin: 10px 5px 10px 0;
                    border-radius: 6px;
                    &.blog-labels{
                        cursor: pointer;
                    }
                    i {
                        display: inline-block;
                        margin-right: 5px;
                    }
                    user-select: none;
                }
            }
            .markdown-body {
                box-sizing: border-box;
                margin: 0 auto;
                padding: 0 0 15px;
            }
            .blog-comment{
                padding: 10px 0;
                .title{
                    span{
                        font-size: 18px;
                        display: inline-block;
                        border-bottom: 3px solid #258EFB;
                        padding: 5px 15px;
                        position: relative;
                        top: 2px;

                    }
                    border-bottom: 1px solid #eaecef;
                }
                .body{
                    padding: 5px 0;
                    .item{
                        margin:20px 5px;
                        .comment_user_avatar{
                            img{
                                display: inline-block;
                                border-radius: 5px;
                                overflow: hidden;
                            }
                        }

                        .table-right{
                            padding-left: 15px;
                            .comment_user_name{
                                font-size: 16px;
                                display: inline-block;
                                padding: 0 5px 0 0;
                                color: #076DD0;
                                cursor: pointer;
                                text-decoration: none;
                            }
                            .comment_time{
                                font-size: 12px;
                                color: #656C7A;
                            }
                            .comment_content{
                                padding: 5px 0;
                            }
                        }
                    }
                }
            }
        }

    }
</style>
