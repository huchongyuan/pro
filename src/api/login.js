/*
 * @Descripttion:
 * @version:
 * @Author: huchongyuan
 * @Date: 2021-03-08 00:15:42
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-16 10:55:40
 */

import service from '@/utils/request';

export default {
  submitLogin: (data) => service({
    method: 'post',
    url: '/api/bzysxt/system/login',
    data,
  }),
  // 
  queryDis:(data)=> service({
    method: 'get',
    url: '/api/bzysxt/classify/simple',
    data
  }),
  queryAllDis:(data)=> service({
    method: 'get',
    url: '/api/bzysxt/classify/all',
    data
  })
};
