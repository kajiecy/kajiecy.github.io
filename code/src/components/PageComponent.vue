<!--  Create by YangChen on 2019/9/4 17:10  -->
<template>
    <div class="blog-page-nav">
        <template v-for="(item,index) in totalPage">
            <span v-if="checkShow(item,'lt')==='show'" class="page-item" @click="changeNumAppoint(item)">{{item}}</span>
            <span v-else-if="checkShow(item,'lt')==='ignore'" class="page-item page-ignore">...</span>
        </template>
        <span class="page-item current">{{pageNum}}</span>

        <template v-for="(item,index) in totalPage">
            <span v-if="checkShow(item,'gt')==='show'" class="page-item" @click="changeNumAppoint(item)">{{item}}</span>
            <span v-else-if="checkShow(item,'gt')==='ignore'" class="page-item page-ignore">...</span>
        </template>
        <span class="page-item page-next" @click="changePageNum"><i class="iconfont icon-next"></i></span>
    </div>

</template>
<script lang="ts">
    import {Component, Prop, Vue, Model, Watch, Inject} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class PageComponents extends Vue {
        @Prop({type: Number,default:1}) private pageNum!: number;
        @Prop({type: Number,default:1}) private pageSize!: number;
        @Prop({type: Number,default:1}) private total!: number;

        // pageNum: number = 1;
        // pageSize: number = 10;
        // total: number = 60;
        // totalPage: number = Math.ceil(this.total / this.pageSize);
        get totalPage(){
            return Math.ceil(this.total / this.pageSize);
        }
        checkShow(curNum: number, type: string) {
            if (type === 'lt') {
                if (curNum < this.pageNum) {
                    if (curNum == 1||this.totalPage <= 7||this.pageNum <= 4||curNum === this.pageNum - 1) {
                        return 'show'
                    }else {
                        //如果右边的数量达不到4时 右边多渲染几个 补齐7个
                        let rightLackNum = 3 - (this.totalPage - this.pageNum);
                        if (rightLackNum > 0) {
                            if (curNum >= this.pageNum - rightLackNum - 1) {
                                return "show"
                            }
                        }
                        if (curNum - 1 === 1) {
                            return 'ignore'
                        }
                    }
                }
            } else if (type === 'gt') {
                if (curNum > this.pageNum) {
                    if (curNum == this.totalPage||this.totalPage <= 7||this.pageNum >= this.totalPage - 3||curNum === this.pageNum + 1) {
                        return 'show'
                    } else {
                        //如果左边的数量达不到4时 右边多渲染几个 补齐7个
                        let leftLackNum = 4 - this.pageNum;
                        if (leftLackNum > 0) {
                            if (curNum <= this.pageNum + leftLackNum + 1) {
                                return "show"
                            }
                        }
                        if (curNum + 1 === this.totalPage) {
                            return 'ignore'
                        }
                    }

                }
            }
            return 'hidden';
        }
        changePageNum(){
            if(this.pageNum<this.totalPage){
                this.$emit('changePage',this.pageNum+1);
            }
        }
        changeNumAppoint(pageNum:number){
            this.$emit('changePage',pageNum);
        }
    }
</script>
<style scoped lang="scss">
    .blog-page-nav {
        .page-item {
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

            &.page-ignore {
                background-color: white;
                font-size: 18px;
                cursor: auto;
            }
        }

        .current {
            color: #fff;
            background: #258EFB;
            opacity: .9;
            box-shadow: 0 2px 12px #258EFB;
        }
    }
</style>

