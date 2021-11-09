<template>
  <div class="home">
    <!--        <div style="position:absolute" >-->
    <!--            <button v-if="!token" style="position:absolute" @click="setToken">setToken</button>-->
    <!--            <span v-else>{{token}}</span>-->
    <!--        </div>-->
    <div class="home-background-div"></div>
    <div class="home-body">
      <div class="left-info">
        <div
          class="left-info-fix"
          :class="leftMenuState ? 'menu_open' : 'menu_close'"
        >
          <div class="overlay" @click="overLayClick">
            <div @click.stop="leftBodyClick" class="left-info-body">
              <div class="user-avatar">
                <div class="img-div">
                  <img
                    :src="bloggerInfo.avatar_url"
                    width="150"
                    height="150"
                    alt=""
                  />
                </div>
              </div>
              <div class="blog-count">
                <div>
                  <span>文章</span><br />
                  {{
                    $store.state.repoInfo.open_issues_count
                      ? $store.state.repoInfo.open_issues_count
                      : 0
                  }}
                </div>
                <div>
                  <span>标签</span><br />
                  {{ $store.state.labelsList.length }}
                </div>
                <div>
                  <span>分类</span><br />
                  {{ $store.state.milestonesList.length }}
                </div>
              </div>
              <span
                class="blog-function-list-item"
                :class="
                  $route.name !== 'blog_content' ||
                  $route.query.issueNumber != $store.state.aboutIssuesId
                    ? 'active'
                    : ''
                "
                @click="$router.push('/')"
                title="我的首页"
              >
                <div class="list-item-content">
                  <i class="item-icon iconfont icon-shouye"></i>我的首页
                </div>
              </span>
              <span
                class="blog-function-list-item"
                :class="
                  $route.name === 'blog_content' &&
                  $route.query.issueNumber == $store.state.aboutIssuesId
                    ? 'active'
                    : ''
                "
                @click="
                  $router.push({
                    name: 'blog_content',
                    query: { issueNumber: $store.state.aboutIssuesId },
                  })
                "
                title="关于博客"
              >
                <div class="list-item-content">
                  <i class="item-icon iconfont icon-about"></i>关于博客
                </div>
              </span>

              <div class="blog-widget-wrap">
                <h3 class="blog-widget-title">社交按钮</h3>
                <div class="blog-widget social-widget">
                  <!-- github -->
                  <a
                    class="blog-widget-item github-icon"
                    href="https://github.com/kajiecy/"
                    target="_blank"
                    rel="external nofollow noopener noreferrer"
                    title="github"
                  >
                    <i class="iconfont icon-github"></i>
                  </a>
                  <!--QQ-->

                  <a
                    class="blog-widget-item qq-icon"
                    href="http://wpa.qq.com/msgrd?v=3&amp;uin=851416347&amp;site=qq&amp;menu=yes"
                    target="_blank"
                    rel="external nofollow noopener noreferrer"
                    title="Click me!"
                  >
                    <i class="iconfont icon-tubiao215"></i>
                  </a>
                  <!--微信-->
                  <a
                    class="blog-widget-item wechat-icon"
                    href="JavaScript:void(0)"
                    target="_blank"
                    rel="external nofollow noopener noreferrer"
                    title="wechat:cy851416347"
                  >
                    <i class="iconfont icon-weixin"></i>
                  </a>
                  <!--简书-->
                  <a
                    class="blog-widget-item jianshu-icon"
                    href="https://www.jianshu.com/u/5636d2922139"
                    target="_blank"
                    rel="external nofollow noopener noreferrer"
                    title="简书"
                  >
                    <i class="iconfont jianshu">简</i>
                  </a>
                  <!--掘金-->
                  <a
                    class="blog-widget-item juejin-icon"
                    href="https://juejin.im/user/5b8f2639e51d4538c4120c14"
                    target="_blank"
                    rel="external nofollow noopener noreferrer"
                    title="掘金"
                  >
                    <i class="iconfont icon-juejin"></i>
                  </a>
                  <!--战网-->
                  <a
                    class="blog-widget-item battle-icon"
                    href="JavaScript:void(0)"
                    target="_blank"
                    rel="external nofollow noopener noreferrer"
                    title="卡杰#12345"
                  >
                    <i class="iconfont icon-battle-net"></i>
                  </a>
                </div>
              </div>
            </div>
            <div @click.stop="leftBodyClick" class="right-info-bottom">
              <div class="blog-widget-wrap blog-widget-tags">
                <h3 class="blog-widget-title">标签云</h3>
                <div class="blog-widget tag-widget">
                  <span
                    class="item"
                    v-for="(item, index) in $store.state.labelsList"
                    :style="{ backgroundColor: '#' + item.color }"
                    :key="index"
                    @click="
                      $router.push({
                        name: 'blog_list',
                        query: { tag: item.name },
                      })
                    "
                  >
                    # {{ item.name }}
                  </span>
                </div>
              </div>
              <div class="blog-widget-wrap blog-widget-tags">
                <h3 class="blog-widget-title">文章分类</h3>
                <div class="blog-widget type-widget">
                  <div
                    class="item"
                    v-for="(item, index) in $store.state.milestonesList"
                    :key="index"
                    @click="
                      $router.push({
                        name: 'blog_list',
                        query: { milestone: item.number },
                      })
                    "
                  >
                    {{ item.title }} <span>{{ item.open_issues }}</span>
                  </div>
                </div>
              </div>
              <div style="text-align: right; color: #9ca2a8" class="pb20">
                <a
                  href="http://beian.miit.gov.cn"
                  style="color: #1c8fec; text-decoration: none; color: #666666"
                  target="_blank"
                  >苏ICP备18024070号</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-body">
        <div class="home-header">
          <div class="dis_table wd100">
            <div class="dis_table_cell">
              <i class="iconfont icon-caidan" @click="leftMenuState = true"></i>
            </div>
            <div class="dis_table_cell textcenter" style="width: 60px">
              <img
                style="border-radius: 50%"
                :src="bloggerInfo.avatar_url"
                width="40"
                height="40"
                alt=""
              />
            </div>
          </div>
        </div>
        <transition name="up-down" mode="out-in">
          <router-view :key="routeKey"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Model,
  Watch,
  Inject,
} from "vue-property-decorator";

Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);

@Component({
  components: {},
})
export default class Home extends Vue {
  bloggerInfo: any = {};
  routeKey: number = Math.random();
  leftMenuState: boolean = false;
  created() {}
  mounted() {
    this.$githubApi
      .getBloggerInfo()
      .then((bloggerInfo: any) => (this.bloggerInfo = bloggerInfo));
    // @ts-ignore
    this.$githubApi.labelsList4Repository().then((labelsList: any) =>
      this.$store.commit(
        "setLabelsList",
        labelsList.filter((item: any) => {
          return item.name.indexOf(":img") === -1;
        })
      )
    );
    this.$githubApi
      .milestonesList4Repository()
      .then((milestonesList: any) =>
        this.$store.commit("setMilestonesList", milestonesList)
      );
    this.$githubApi.getRepoInfo().then((repoInfo: any) => {
      this.$store.commit("setRepoInfo", repoInfo);
    });
  }
  @Watch("$route", { deep: false })
  watchTopStatus(newValue: any, oldValue: any) {
    this.routeKey = Math.random();
  }
  setToken() {
    let token = window.prompt("token", "input token!");
    if (token) {
      localStorage.setItem("token_access", <string>token);
      localStorage.setItem(
        "login_avatar",
        "https://avatars1.githubusercontent.com/u/28913648?v=4"
      );
      window.history.go(0);
    }
  }
  get token() {
    return localStorage.getItem("token_access");
  }
  overLayClick() {
    console.log("点击了");
    this.leftMenuState = false;
  }
  leftBodyClick() {}
}
</script>
<style lang="scss">
/* 1. 定义进入过渡的开始状态； */
.up-down-enter {
  /*transform: scaleY(0);*/
  opacity: 0;
  transform: scale3d(0.5, 0.5, 1);
}
/* 2. 定义进入过渡生效时的状态；这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。 */
.up-down-enter-active {
  transition: all 0.5s;
}
/* 3. 定义进入过渡的结束状态； */
.up-down-enter-to {
  /*transform: scaleY(1);*/
  opacity: 1;
  transform: scale3d(1, 1, 1);
}
/* 4. 定义离开过渡的开始状态； */
.up-down-leave {
  /*transform: scale3d(1,1,0);*/
  opacity: 1;
}
/* 5. 定义离开过渡生效时的状态；这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。 */
.up-down-leave-active {
  transition: all 0.3s;
}
/* 6. 定义离开过渡的结束状态； */
.up-down-leave-to {
  /*transform: scaleY(0);*/
  /*transform: scale3d(0,0,1);*/
  opacity: 0;
}

.home {
  .home-background-div {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;

    background: url("http://qiniu.kajie88.com/e6f4b13bb6cd1d6a109e1ae85120f33f.jpg");
    background-size: cover;
    opacity: 0.2;
    filter: blur(30px);
  }

  .home-body {
    width: 1200px;
    margin: 0 auto;
    display: block;
    /*grid-template-columns: 240px 960px;*/

    .left-info {
      display: inline-block;
      width: 240px;

      .left-info-fix {
        margin-top: -23px;
        padding-top: 10px;
        position: fixed;
        height: 101vh;
        overflow-y: auto;
        z-index: 2;
        -webkit-overflow-scrolling: touch;

        &::-webkit-scrollbar {
          display: none;
        }

        .overlay {
          width: 240px;
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
              box-shadow: 0 0.3rem 2rem rgba(161, 177, 204, 0.6);
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
              @media (prefers-color-scheme: dark) {
                span {
                  color: #ddd;
                }
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
              background: #d1d1d1;
            }

            &.active .list-item-content {
              color: #ffffff;
              opacity: 0.9;
              background: #258efb;
              box-shadow: 0 2px 12px #258efb;
            }
          }
        }
        .right-info-bottom {
          width: 240px;
          padding: 0 20px;
          overflow: hidden;
          .blog-widget-wrap {
            margin: 16px 0 16px 0;
          }

          .tag-widget {
            padding: 10px 10px;

            .item {
              background-color: rgba(56, 150, 248, 0.15);
              color: rgba(56, 150, 248, 0.8);
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
              border-bottom: 1px solid rgba(161, 177, 204, 0.2);

              &:last-child {
                border-bottom: 0;
              }
              span {
                padding: 5px;
                display: block;
                background-color: rgba(56, 150, 248, 0.9);
                color: white;
                float: right;
                width: 25px;
                height: 25px;
                text-align: center;
                border-radius: 50px;
                position: relative;
                font-size: 12px;
                top: -3px;
              }
            }
          }
        }

        /*社交按钮样式*/
        .blog-widget-wrap {
          grid-row: span 3;
          box-shadow: 0 0 1rem rgba(161, 177, 204, 0.4);
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
        @media (prefers-color-scheme: dark) {
          .blog-widget-wrap {
            background-color: #808080;
            box-shadow: 0 0 0.3rem rgba(255, 255, 255, 0.8);
          }
        }
      }
    }
    .home-header {
      display: none;

      width: 100%;
      background-color: #ffffff;
      padding: 10px;
      .dis_table_cell:first-child {
        text-align: left;
        padding-left: 10px;
        i {
          cursor: pointer;
          font-size: 18px;
        }
      }
    }
    .grid-body {
      margin-left: 240px;
      margin-top: -20px;
      width: 960px;
    }
    /*.grid-body {*/
    /*    flex: 0 0 960px;*/
    /*    display: inline-grid;*/
    /*    grid-template-columns: repeat(12, 1fr);*/
    /*    grid-gap: 16px 32px;*/
    /*}*/
  }
  @media (prefers-color-scheme: dark) {
    .left-info-fix {
      background-color: dimgrey;
    }
  }
  @media (max-width: 1200px) {
    .home-body {
      width: 100%;
      /*grid-template-columns: 240px 1fr*/
      display: block;
      .left-info {
        width: 240px;
        .left-info-fix {
        }
      }
      .grid-body {
        margin-left: 240px;
        width: calc(100% - 240px);
      }
    }
  }
  @media (max-width: 1000px) {
    .home-body {
      width: 100%;
      /*grid-template-columns: 0 1fr;*/
      display: block;
      .left-info {
        .left-info-fix.menu_close {
          width: 0;
        }
        .left-info-fix.menu_open {
          .overlay {
            width: 100vh;
            background-color: rgba(0, 0, 0, 0.4);
          }
          .left-info-body,
          .right-info-bottom {
            background-color: #ffffff;
          }
        }
      }
      .home-header {
        display: block;
      }
      .grid-body {
        margin-left: 0;
        width: calc(100%);
      }
    }
  }
}
.github-icon {
  color: #191717;
  background-color: rgba(25, 23, 23, 0.1);
}
.qq-icon {
  color: #f9ae08;
  background-color: rgba(249, 174, 8, 0.1);
}
.wechat-icon {
  color: #7fd53e;
  background-color: rgba(14, 71, 161, 0.1);
}
.jianshu-icon {
  color: #ffffff;
  background-color: #ea6f5a;
}
.juejin-icon {
  color: #006cff;
  background-color: rgba(14, 71, 161, 0.1);
}
.battle-icon {
  color: #3c57a4;
  background-color: rgba(60, 87, 164, 0.1);
}
@media (prefers-color-scheme: dark) {
  .github-icon {
    color: #191717;
    background-color: rgba(255, 255, 255, 0.3);
  }
  .qq-icon {
    color: #f9ae08;
    background-color: rgba(249, 224, 118, 0.3);
  }
  .wechat-icon {
    color: #7fd53e;
    background-color: rgba(114, 171, 255, 0.3);
  }
  .jianshu-icon {
    color: #ffffff;
    background-color: #ea6f5a;
  }
  .juejin-icon {
    color: #006cff;
    background-color: rgba(114, 171, 255, 0.3);
  }
  .battle-icon {
    color: #3c57a4;
    background-color: rgba(160, 187, 255, 0.3);
  }
}
</style>
