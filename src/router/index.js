import Vue from 'vue'
import Router from "vue-router";
const context = require.context("../modules", true, /route\.js/);

let routes = [];
context.keys().forEach(url => {
  const { route } = context(url);
  routes = routes.concat(route);
});

routes.push({
  path: "*",
  redirect: "/newSongs",
});

Vue.use(Router);

export default new Router({ routes });

