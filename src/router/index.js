/*
 * @Descripttion:路由配置文件
 * @version:1.0.0
 * @Author: huchongyuan
 * @Date: 2021-03-01 21:52:51
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-11 16:22:02
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children:[
      {
        path: 'IntegratedQuery',
        name: 'IntegratedQuery',
        meta:{
          title:"综合查询"
        },
        component: () => import(/* webpackChunkName: "IntegratedQuery" */ '../views/IntegratedQuery/index.vue')
      },
      {
        path: 'NormBaseQuery',
        name: 'NormBaseQuery',
        meta:{
          title:"标准基础查询 "
        },
        component: () => import(/* webpackChunkName: "NormBaseQuery" */ '../views/ProfessionalQuery/NormBaseQuery.vue')
      },
      {
        path: 'NormAdvancedQuery',
        name: 'NormAdvancedQuery',
        meta:{
          title:"标准高级查询"
        },
        component: () => import(/* webpackChunkName: "NormAdvancedQuery" */ '../views/ProfessionalQuery/NormAdvancedQuery.vue')
      },
      {
        path: 'NormInfoQuery',
        name: 'NormInfoQuery',
        meta:{
          title:"标准内容"
        },
        component: () => import(/* webpackChunkName: "NormInfoQuery" */ '../views/ProfessionalQuery/NormInfoQuery.vue')
      },
      {
        path: 'TermAndDefinition',
        name: 'TermAndDefinition',
        meta:{
          title:"术语和定义"
        },
        component: () => import(/* webpackChunkName: "TermAndDefinition" */ '../views/ProfessionalQuery/TermAndDefinition.vue')
      },
      {
        path: 'DraftingUnit',
        name: 'DraftingUnit',
        meta:{
          title:"起草单位基本查询"
        },
        component: () => import(/* webpackChunkName: "DraftingUnit" */ '../views/ProfessionalQuery/DraftingUnit.vue')
      },
      {
        path: 'DraftingAdvancedUnit',
        name: 'DraftingAdvancedUnit',
        meta:{
          title:"起草单位高级查询"
        },
        component: () => import(/* webpackChunkName: "DraftingAdvancedUnit" */ '../views/ProfessionalQuery/DraftingAdvancedUnit.vue')
      },
      {
        path: 'Rapporteur',
        name: 'Rapporteur',
        meta:{
          title:"起草人"
        },
        component: () => import(/* webpackChunkName: "Rapporteur" */ '../views/ProfessionalQuery/Rapporteur.vue')
      },
      {
        path: 'RapporteurAdvanced',
        name: 'RapporteurAdvanced',
        meta:{
          title:"起草人高级查询"
        },
        component: () => import(/* webpackChunkName: "RapporteurAdvanced" */ '../views/ProfessionalQuery/RapporteurAdvanced.vue')
      },
      {
        path: 'AuthorityFile',
        name: 'AuthorityFile',
        meta:{
          title:"规范性引用文件"
        },
        component: () => import(/* webpackChunkName: "AuthorityFile" */ '../views/ProfessionalQuery/AuthorityFile.vue')
      },
      {
        path:'Bibliography',
        name:'Bibliography',
        meta:{
          title:"参考文献"
        },
        component: () => import(/* webpackChunkName: "Bibliography" */ '../views/ProfessionalQuery/Bibliography.vue')
      },
      {
        path:'NormDataStatistics',
        name:'NormDataStatistics',
        meta:{
          title:"标准数据统计"
        },
        component: () => import(/* webpackChunkName: "NormDataStatistics" */ '../views/DataStatistics/NormDataStatistics.vue')
      },
      {
        path:'NormDataModifyStatistics',
        name:'NormDataModifyStatistics',
        meta:{
          title:"标准修订数据统计"
        },
        component: () => import(/* webpackChunkName: "NormDataModifyStatistics" */ '../views/DataStatistics/NormDataModifyStatistics.vue')
      }
    ]
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
