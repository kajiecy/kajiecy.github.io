import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          name: 'blog_list',
          // @ts-ignore
          component: () => import(/* webpackChunkName: "about" */ '@/views/blogpages/BlogList.vue')
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
  ]
})
