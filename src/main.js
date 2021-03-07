/*
 * @Descripttion:
 * @version:
 * @Author: huchongyuan
 * @Date: 2021-03-01 21:52:51
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-07 22:49:15
 */
import Vue from 'vue';
import ViewUI from 'view-design';
import App from './App.vue';
import router from './router';
import store from './store';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false;
Vue.use(ViewUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
