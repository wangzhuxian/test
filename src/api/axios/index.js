import axios from 'axios';
import { Toast } from 'mint-ui';
import router from '../../router';
const api = axios.create({
  timeout: 60000,
  // baseURL: '//' + host
  baseURL: ''
});
/**
 * 提示函数
 * 显示一秒后关闭
 */
const tip = msg => {
  Toast({
    message: msg,
    duration: 1000
  });
};
/**
 * 跳转到跟路径去
 */
const toLogin = () => {
  router.replace({
    path: '/'
  });
};
/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  switch (status) {
    case 403:
      tip('登录过期，请重新登录');
      // 清除token
      // localStorage.removeItem('token');
      // store.commit('loginSuccess', null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    case 404:
      tip('网络请求不存在');
      break;
    default:
      tip(other);
  }
};
api.interceptors.request.use(
  function(config) {
    // 请求发起前
    return config;
  },
  function(error) {
    // 请求未成功
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function(response) {
    // 只返回data的内容
    return response.data;
  },
  function(error) {
    // 请求成功，返回错误
    const { response } = error;
    errorHandle(response.status, response.data.msg);
    return Promise.reject(response);
  }
);

export default api;
