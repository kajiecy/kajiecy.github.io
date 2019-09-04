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
            <div>
                <article class="markdown-body" v-html="markDownBody">

                </article>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component,Prop,Vue,Model,Watch,Inject} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class BlogList extends Vue {
        blogContent:any = {};
        markDownBody:string = '';

        created(){
            this.initData();
        }
        async initData(){
            this.blogContent = await this.$githubApi.getIssuesContent({issueNumber:this.$route.query.issueNumber});
            this.markDownBody = <string>await this.$githubApi.getMdContent({text:this.blogContent.body});
        }
        getBlogImg(blogItem:any){
            let imgUrl = '';
            if(blogItem.labels&&blogItem.labels.length){
                // 取最后一个有图片的标签
                blogItem.labels.forEach((item:any)=>{
                    if(item.name.indexOf(':img')===0){
                        imgUrl = this.$store.state.qiniuDomainName +item.name.substring(5);
                    }
                })
                console.log(imgUrl)
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
            return imgUrl;
        }
        getCharCount(text:string){
            let reg = /[\u4e00-\u9fa5]/g;
            let reg2 = /[a-zA-Z]/g;
            let count1 = text.match(reg)?text.match(reg)!.length:0;
            let count2 = text.match(reg2)?text.match(reg2)!.length:0
            return (count1+count2/2).toFixed(0);
        }
        calcReadTime(text:string){
            let reg = /[\u4e00-\u9fa5]/g;
            let reg2 = /[a-zA-Z]/g;
            let count1 = text.match(reg)?text.match(reg)!.length:0;
            let count2 = text.match(reg2)?text.match(reg2)!.length:0
            // return ((count1+count2) / 500).toFixed(0);
            return Math.ceil((count1+count2) / 500);
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
            border-radius: 10px;
            overflow: hidden;

            .img-div {
                height: 500px;
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
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
        }

    }
</style>
