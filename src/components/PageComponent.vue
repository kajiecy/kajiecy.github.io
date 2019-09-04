<!--  Create by YangChen on 2019/9/4 17:10  -->
<template>
    <div>
        <div class="blog-page-nav">
            <span class="page-item ">1</span>
            <span class="page-item page-ignore">...</span>
            <span class="page-item ">4</span>
            <span class="page-item current">5</span>
            <span class="page-item ">6</span>
            <span class="page-item page-ignore">...</span>
            <span class="page-item ">10</span>
            <span class="page-item page-next"><i class="iconfont icon-next"></i></span>
        </div>
        <div class="blog-page-nav">
            <span class="page-item ">1</span>
            <span class="page-item current">2</span>
            <span class="page-item ">3</span>
            <span class="page-item ">4</span>
            <span class="page-item ">5</span>
            <span class="page-item page-ignore">...</span>
            <span class="page-item ">7</span>
            <span class="page-item page-next"><i class="iconfont icon-next"></i></span>
        </div>

        <div class="blog-page-nav">
            <template v-for="(item,index) in totalPage">
                <span v-if="checkShow(item,'lt')==='show'" class="page-item" @click="pageNum = item">{{item}}</span>
                <span v-else-if="checkShow(item,'lt')==='ignore'" class="page-item page-ignore">...</span>
            </template>
            <span class="page-item current">{{pageNum}}</span>

            <template v-for="(item,index) in totalPage">
                <span v-if="checkShow(item,'gt')==='show'" class="page-item" @click="pageNum = item">{{item}}</span>
                <span v-else-if="checkShow(item,'gt')==='ignore'" class="page-item page-ignore">...</span>
            </template>
            <span class="page-item page-next" @click="pageNum++"><i class="iconfont icon-next"></i></span>
        </div>
    </div>

</template>
<script lang="ts">
    import {Component, Prop, Vue, Model, Watch, Inject} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class PageComponents extends Vue {
        // @Prop({type: Number,default:1}) private pageNum!: number;
        // @Prop({type: Number,default:1}) private pageSize!: number;
        // @Prop({type: Number,default:1}) private total!: number;

        pageNum: number = 1;
        pageSize: number = 10;
        total: number = 70;
        totalPage: number = Math.ceil(this.total / this.pageSize);

        checkShow(curNum: number, type: string) {
            if (type === 'lt') {
                let hasIgnore = false;
                if (curNum < this.pageNum) {
                    if (curNum == 1) {
                        return 'show'
                    }
                    if (this.totalPage <= 7) {
                        return 'show';
                    }

                    if (this.pageNum <= 4) {
                        return 'show';
                    } else {
                        if (curNum === this.pageNum - 1) {
                            return 'show'
                        } else {
                            //如果右边的数量达不到4时 右边多渲染几个 补齐7个
                            let rightLackNum = 3 - (this.totalPage - this.pageNum);
                            console.log(rightLackNum)
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
                    // }
                }
            } else if (type === 'gt') {
                if (curNum > this.pageNum) {
                    if (curNum == this.totalPage) {
                        return 'show'
                    }
                    if (this.totalPage <= 7) {
                        return 'show';
                    }
                    if (this.pageNum >= this.totalPage - 3) {
                        return 'show';
                    } else {
                        if (curNum === this.pageNum + 1) {
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
            }
            return 'hidden';
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

