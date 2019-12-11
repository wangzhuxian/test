import Vue from "vue";
import Vuex from "vuex";
import global from "@/global/store";
Vue.use(Vuex);
const modules = { global };
const context = require.context('../modules', true, /store\/index\.js$/);
context.keys().forEach((key) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  modules[key.replace(/^\.\/|\/store\/index\.js$/g, '')] = { namespaced: true, ...context(key).default };
});
const store = new Vuex.Store({
  modules,
  strict: true,
});

export default store;