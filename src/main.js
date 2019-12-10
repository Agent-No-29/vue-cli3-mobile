import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from 'axios'
import 'lib-flexible/flexible'
import { Button, NumberKeyboard, Field, CellGroup, NavBar } from 'vant';

Vue.use(Button);
Vue.use(NumberKeyboard);
Vue.use(Field);
Vue.use(CellGroup);
Vue.use(NavBar);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')