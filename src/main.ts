import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
// axios 封装 post
import {post,get} from './util/http';
Vue.prototype.$post=post;
Vue.prototype.$get=get;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
