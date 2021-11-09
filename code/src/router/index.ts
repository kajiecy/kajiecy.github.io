import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from '@/views/Home.vue'


Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location:any) {
  // @ts-ignore
  return originalPush.call(this, location).catch(err => err)
}

let router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'blog_list',
          // @ts-ignore
          component: () => import(/* webpackChunkName: "about" */ '@/views/blogpages/BlogList.vue')
        },
        {
          path: '/blog_content',
          name: 'blog_content',
          // @ts-ignore
          component: () => import(/* webpackChunkName: "about" */ '@/views/blogpages/BlogContent.vue')
        },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // @ts-ignore
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/callback',
      name: 'callback',
      // @ts-ignore
      component: () => import(/* webpackChunkName: "about" */ '@/views/LoginCallBack.vue')
    },
    {
      path: '/api_test',
      name: 'api_test',
      // @ts-ignore
      component: () => import(/* webpackChunkName: "about" */ '@/views/ApiTest.vue')
    },
    {
      path: '/test',
      name: 'test',
      // @ts-ignore
      component: () => import(/* webpackChunkName: "about" */ '@/views/test/test.vue')
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    console.log('出发scrollbehavior')
    return { x: 0, y: 0 }
  }
})
export default router;
