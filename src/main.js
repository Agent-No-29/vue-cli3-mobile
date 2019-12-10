import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from 'axios'
import 'lib-flexible/flexible'
import { Button, NumberKeyboard, Field, CellGroup } from 'vant';

Vue.use(Button);
Vue.use(NumberKeyboard);
Vue.use(Field);
Vue.use(CellGroup);

Vue.config.productionTip = false

//服务地址
// http.defaults.baseURL = HTTP_BASE_URL;
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
http.defaults.withCredentials = true;

// 请求拦截器
http.interceptors.request.use((config) => {
  const regExp = (params) => {
    return /form-data/.test(params)
  }
  const temp = config;
  // post处理
  if (!regExp(temp.headers['Content-Type'])) {
    temp.data = temp.data && qs.stringify(temp.data);
  }
  return temp
}, function (xhr) {
  Message({ message: xhr.response.data.message, type: 'error' })
  return xhr.response.data
})

// // 响应拦截器
// http.interceptors.response.use((response) => {
//   if (!response.data.success) {
//     Message({ message: response.data.message, type: 'error' });
//   }
//   return response.data
// }, (xhr) => {
//   const resData = xhr.response && xhr.response.data;
//   if (resData && resData.data.records && resData.data.records[0] && resData.data.records[0].needLogin) {
//     router.push({ path: '/login', query: { timeout: true } });
//   } else {
//     if (resData) Message({ message: resData.message, type: 'error' });
//   }
//   return resData
// })

export default http


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')