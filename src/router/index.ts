import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '/callback',
      name: 'callback',
      component: () => import(/* webpackChunkName: "about" */ '@/views/LoginCallBack.vue')
    },
    {
      path: '/api_test',
      name: 'callback',
      component: () => import(/* webpackChunkName: "about" */ '@/views/ApiTest.vue')
    },
  ]
})
