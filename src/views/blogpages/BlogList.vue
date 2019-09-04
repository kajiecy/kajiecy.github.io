<template>
    <div class="blog-list">
        <template v-for="(item,index) in issuesList">
            <div class="blog-list-item">
                <div class="img-div" @click="$router.push({name:'blog_content',query:{issueNumber:item.number}})">
                    <img :src="getBlogImg(item)" width="100%" height="100%">
                    <div class="title-div">
                        {{item.title}}
                    </div>
                </div>
                <div class="tag-div">
                    <span class="tag-item" style="background-color: #258EFB"><i class="iconfont icon-riqi"></i>{{formatDate(item.created_at)}}</span>
                    <span class="tag-item" style="background-color: #E6A23C"><i class="iconfont icon-riqi"></i>{{getCharCount(item.body)}}字</span>
                    <span class="tag-item" style="background-color: #FF4E6A"><i class="iconfont icon-shijian"></i>大概 {{calcReadTime(item.body)}} 分钟</span>
                    <span class="tag-item blog-labels"
                          v-for="(cItem) in item.labels.filter((ccItem)=>ccItem.name.indexOf(':img')===-1)"
                          @click="$router.push({name:'blog_list',query:{tag:cItem.name}})"
                          :style="{backgroundColor:'#'+cItem.color}">
                        <i class="iconfont icon-biaoqian"></i>{{cItem.name}}
                    </span>
                    <span class="tag-item" style="background-color:#67C23A;cursor: pointer" @click="$router.push({name:'blog_list',query:{milestone:item.milestone.number}})"><i class="iconfont icon-leimupinleifenleileibie"></i>{{item.milestone.title}}</span>
                </div>
            </div>
        </template>
        <nav class="blog-page-nav">
            <span class="page-item current">1</span>
            <span class="page-item ">2</span>
            <span class="page-item page-next"><i class="iconfont icon-next"></i></span>
        </nav>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class BlogList extends Vue {
        pageNum:number = 1;
        pageSize:number = 10;
        issuesList:any = [];
        created(){
            this.addScrollListen();
            this.searchIssuesList();
        }
        async searchIssuesList(){
            this.issuesList = await this.$githubApi.getIssuesList({milestone:<string>this.$route.query.milestone,labels:<string>this.$route.query.tag,page:this.pageNum,perPage:this.pageSize});
        }
        addScrollListen(){
            window.onscroll = function(){
                //变量scrollTop是滚动条滚动时，距离顶部的距离
                var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
                //变量windowHeight是可视区的高度
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                //变量scrollHeight是滚动条的总高度
                var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
                //滚动条到底部的条件
                if(scrollTop+windowHeight==scrollHeight){
                    //写后台加载数据的函数
                    console.log("距顶部"+scrollTop+"可视区高度"+windowHeight+"滚动条总高度"+scrollHeight);
                }
            }
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
    .blog-list {
        background-color: white;
        box-shadow: 0 0 1rem rgba(161, 177, 204, .4);
        padding: 20px;
        min-height: 100vh;

        .blog-list-item {
            margin-bottom: 20px;
            box-shadow: 0 0 1rem rgba(161, 177, 204, .5);
            border-radius: 10px;
            overflow: hidden;

            .img-div {
                height: 500px;
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
                overflow: hidden;
                cursor: pointer;
                user-select: none;
                /*box-shadow: 0 0 1rem rgba(161, 177, 204, .4);*/

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
                padding: 5px 10px 10px 15px;
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
            .describe-div {
                font-size: 14px;
            }

        }
        .blog-page-nav{
            .page-item{
                display: inline-block;
                border-radius: 10px;
                width: 35px;
                height: 35px;
                line-height: 35px;
                margin-right: 8px;
                text-align: center;
                background-color: #e4e3e6;
                color: #777;
                user-select: none;
                cursor: pointer;
            }
            .current{
                color: #fff;
                background: #258EFB;
                opacity: .9;
                box-shadow: 0 2px 12px #258EFB;
            }
        }
    }
</style>
