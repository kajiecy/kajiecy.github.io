<template>
    <div class="blog-list">
        <template v-for="(item,index) in issuesList">
            <div class="blog-list-item">
                <div class="img-div">

                    <!--                    <img src="http://qiniu.kajie88.com/539d5ba608774c0f99693f2d8c031d3a_th.jpg" width="100%" height="100%" alt="">-->
                    <img src="http://qiniu.kajie88.com/e6f4b13bb6cd1d6a109e1ae85120f33f.jpg" width="100%" height="100%"
                         alt="">
                    <div class="title-div">
                        按照中国的传统农历来说
                    </div>
                </div>
                <div class="tag-div">
                    <span class="tag-item"><i class="iconfont icon-riqi"></i>2019年08月25日</span>
                    <span class="tag-item"><i class="iconfont icon-riqi"></i>425字</span>
                    <span class="tag-item"><i class="iconfont icon-shijian"></i>大概 1 分钟</span>
                    <span class="tag-item"><i class="iconfont icon-biaoqian"></i>Vue</span>
                    <span class="tag-item"><i class="iconfont icon-leimupinleifenleileibie"></i>技术</span>
                </div>
                <div class="describe-div">
                    7月18日发生京都动画纵火案，当时听到消息，我心里先是想着“绝对是假的”，不过已经实锤了，只能面对现实了。
                    事情已经发生了，我也做不了什么，发个博文记录一下吧。
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
            console.log(this.$route.query.tag);
        }
        async searchIssuesList(){
            this.issuesList = await this.$githubApi.getIssuesList({milestone:<string>this.$route.query.type,labels:<string>this.$route.query.tag,page:this.pageNum,perPage:this.pageSize});
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
                    imgUrl = item.url;
                })
            }
            if(!imgUrl&&blogItem.milestone&&blogItem.milestone.length){
                // 取最后一个有图片的分类
                blogItem.milestone.forEach((item:any)=>{
                    imgUrl = item.url;
                })
            }
            // 如果标签中的图片
            // 分类中的图片
            // 默认图片
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

            .img-div {
                height: 500px;
                border-radius: 10px;
                overflow: hidden;
                cursor: pointer;
                user-select: none;
            }

            .title-div {
                position: relative;
                top: -55px;
                left: 0;
                font-size: 32px;
                color: white;
                padding: 5px 10px;
                background: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.4)); /* 标准的语法 */
                user-select: auto;
            }

            .tag-item {
                display: inline-block;
                padding: 5px 10px 5px 10px;
                color: white;
                background-color: #42b983;
                margin: 10px 5px 10px 0;
                border-radius: 6px;

                i {
                    display: inline-block;
                    margin-right: 5px;
                }

                user-select: none;
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
