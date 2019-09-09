import Vue from 'vue'
// @ts-ignore
import App from './App.vue'
import router from './router'
import store from './store'
import GithubApi from '@/util/GithubApi.ts'; // @ is an alias to /src
import 'github-markdown-css/github-markdown.css';

import '@/assets/css/common.scss';
import '@/assets/css/main.scss';


Vue.config.productionTip = false;
// 初始化api对象
Vue.prototype.$githubApi = new GithubApi({
  clientId:store.state.clientId,
  clientSecret:store.state.clientSecret,
  owner:store.state.owner,
  repo:store.state.repo,
});

Vue.mixin({
  methods: {
    formatDate(val, n) {
      let padDate = function (va:any) {
        va = va < 10 ? "0" + va : va;
        return va;
      };
      let value = new Date(val),
          year = value.getFullYear(),
          month = padDate(value.getMonth() + 1),
          day = padDate(value.getDate()),
          hour = padDate(value.getHours()),
          minutes = padDate(value.getMinutes()),
          seconds = padDate(value.getSeconds());
      if (n===1) return year + "-" + month + "-" + day + " " + hour + ":" + minutes;
      else return (year + "年" + month + "月" + day + "日");
    }
  }
});


let vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

