import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "@/api";
import './assets/styles/base.css'
import './assets/styles/reset.scss'
// 对组件使用懒加载的用法
import Mint from "mint-ui";
import 'mint-ui/lib/style.css'
Vue.use(Mint);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
