/*
 * @Descripttion:
 * @version:
 * @Author: huchongyuan
 * @Date: 2021-03-01 21:52:51
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-10 10:34:13
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
