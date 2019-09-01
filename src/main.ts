import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'
import GithubApi from '@/util/GithubApi.ts'; // @ is an alias to /src

import '@/assets/css/main.scss';
import '@/assets/css/common.scss';


Vue.config.productionTip = false;
// 初始化api对象
Vue.prototype.$githubApi = new GithubApi({
  clientId:'bb75d376202e7c49a8b6',
  clientSecret:'b2cc94c423c87d09e'+'84119876e4abea998bfee07',
  owner:'kajiecy',
  repo:'kajiecy.github.io',
  issueNumber:'1'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
