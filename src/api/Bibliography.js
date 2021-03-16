/*
 * @Descripttion: 
 * @version: 
 * @Author: huchongyuan
 * @Date: 2021-03-17 00:27:01
 * @LastEditors: huchongyuan
 * @LastEditTime: 2021-03-17 00:27:20
 */
import service from '@/utils/request';

export default {
  query: (data) => service({
    method: 'get',
    url: '/api/bzysxt/references/page',
    data,
  })
};